

const language = window.navigator.userLanguage || window.navigator.language;
const isSpanish = language.startsWith("es");

if (isSpanish) {
    document.getElementsByClassName("nav-link")[0].textContent = "Simulador";
    document.getElementsByClassName("nav-link")[1].textContent = "Documentación";
    
    document.getElementById("convertPrimary").getElementsByTagName("span")[0].textContent = "Converte Al Inglés";
    document.getElementById("convertSecondary").getElementsByTagName("span")[0].textContent = "Converte Al Español";
    document.getElementById("codeInputTitle").textContent = "Entrada de Código";
    document.getElementById("codeOutputTitle").textContent = "Salida de Código";
    document.getElementById("upload").getElementsByTagName("span")[0].textContent = "Subir";
    document.getElementById("download").getElementsByTagName("span")[0].textContent = "Descargar";
    document.getElementById("hide").getElementsByTagName("span")[0].textContent = "Esconder";
    document.getElementById("run").getElementsByTagName("span")[0].textContent = "Ejecutar";
    document.getElementById("clear").getElementsByTagName("span")[0].textContent = "Limpiar";
}



import { Parser, Language } from './node_modules/web-tree-sitter/tree-sitter.js';

await Parser.init({
    locateFile: fileName => `./node_modules/web-tree-sitter/${fileName}`
});

const PY = await Language.load(
    './wasm/tree-sitter-python.wasm'
);
const PY_EN = await Language.load(
    './wasm/tree-sitter-python-english.wasm'
);

const parser = new Parser();

document.getElementById('convertPrimary').addEventListener('click', ()=>{
    translate(isSpanish ? "toEnglish" : "toSpanish");
});
document.getElementById('convertSecondary').addEventListener('click', ()=>{
    translate(isSpanish ? "toSpanish" : "toEnglish");
});
var timerInterval;
function translate(direction) {
    document.getElementById('output').value = "";
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    if (direction=="toSpanish") {
        parser.setLanguage(PY_EN);
    } else {
        parser.setLanguage(PY);
    }
    const src = document.getElementById('editor').value;
    const tree = parser.parse(src);

    // Collect edits only for true keyword positions
    const edits = [];
    function walk(node, ch) {
        let fancyType = "";
        if (node.childCount==0) {
            if(node.parent) {
                if (node.parent.parent) {
                    if (node.parent.type=="attribute" && node.type=="identifier" && ch==2) { // && node is third child
                        if (node.parent.parent.type=="call")
                            fancyType = "method";
                        else
                            fancyType = "method";//"attribute";
                    }
                    if (node.parent.parent.type=="import_from_statement" && node.parent.type=="dotted_name" && node.type=="identifier" && ch==0) // && node is first child
                        fancyType = "module";
                    if (node.parent.parent.type=="aliased_import" && node.parent.type=="dotted_name" && node.type=="identifier") // && node is first child
                        fancyType = "module";
                    if (node.parent.parent.type=="import_statement" && node.parent.type=="dotted_name" && node.type=="identifier") // && node is first child
                        fancyType = "module";
                    if (node.parent.parent.type=="except_clause" && node.parent.type=="as_pattern" && node.type=="identifier" && ch==0) // && node is first child
                        fancyType = "exception";
                    if (node.parent.parent.type=="raise_statement" && node.parent.type=="call" && node.type=="identifier" && ch==0) // && node is first child
                        fancyType = "exception";
                }
                if (node.parent.type=="attribute" && node.type=="identifier" && ch==0) // && node is first child
                    fancyType = "module";//"object";
                if (!fancyType && node.parent.type=="call" && node.type=="identifier")
                    fancyType = "function";
                if (node.parent.type=="type" && node.type=="identifier")
                    fancyType = "type";
                if (node.parent.type=="aliased_import" && node.type=="identifier" && ch==2) // && node is first child
                    fancyType = "module alias";
                if (node.parent.type=="decorator" && node.type=="identifier" && ch==1) // && node is first child
                    fancyType = "function";//"decorator";
            }
            if (keywordTypes.includes(node.type))
                fancyType = "keyword";
            if (!fancyType && node.type=="identifier")
                fancyType = "identifier";

            if (direction=="toEnglish") {
                if (fancyType && fancyType in spanishToEnglish && node.text in spanishToEnglish[fancyType])
                    edits.push({ start: node.startIndex, end: node.endIndex, replacement: spanishToEnglish[fancyType][node.text] });
                else if (fancyType && englishWords.includes(node.text))
                    edits.push({ start: node.startIndex, end: node.endIndex, replacement: node.text+"_pi_tr" });
            } else if (direction=="toSpanish") {
                if (fancyType && fancyType in englishToSpanish && node.text in englishToSpanish[fancyType])
                    edits.push({ start: node.startIndex, end: node.endIndex, replacement: englishToSpanish[fancyType][node.text] });
                else if (fancyType && spanishWords.includes(node.text))
                    edits.push({ start: node.startIndex, end: node.endIndex, replacement: node.text+"_pi_tr" });
            }
        }
        for (let i = 0; i < node.childCount; i++)
            walk(node.child(i), i);
    }
    walk(tree.rootNode);
    
    // Apply replacements from bottom-up
    edits.sort((a,b) => b.start - a.start);
    let result = src;
    for (const {start,end,replacement} of edits)
        result = result.slice(0,start) + replacement + result.slice(end);

    if (result.length > 1000) {
        document.getElementById('output').value = result;
    } else {
        let i=0;
        function addLetter() {
            if (i==result.length) {
                clearInterval(timerInterval);
                return;
            }
            do {
                document.getElementById('output').value += result[i];
                i++;
            } while ((result[i] == ' ') || (result[i] == '\t') || (result[i] == '\n'));
        }
        timerInterval = setInterval(addLetter, 4);
    }
}
document.getElementById('editor').addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
                        "\t" + this.value.substring(end);

        // put caret at right position again
        this.selectionStart =
        this.selectionEnd = start + 1;
    }
});


async function setupPyodide() {
    let pyodide = await loadPyodide();
    document.getElementById("run").classList.remove("btn-secondary");
    document.getElementById("run").classList.add("btn-success");

    pyodide.setStdin({"stdin": function(){return prompt("Input: ")}, "istty": false});
    pyodide.setStdout({batched: (str) => {
        document.getElementById("terminal").value += "\n" + str;
    }})
    pyodide.setStderr({batched: (err) => {
        document.getElementById("terminal").value += "\nERR: " + err;
    }})

    document.getElementById("clear").onclick = function() {
        document.getElementById("terminal").value = "";
    }

    document.getElementById("run").onclick = async function() {
        try {
            const result = await pyodide.runPythonAsync(
                document.getElementById("output").value
            );
        } catch (err) {
            err = err.toString();
            let errBeginning = `PythonError: Traceback (most recent call last):
File "/lib/python313.zip/_pyodide/_base.py", line 597, in eval_code_async
await CodeRunner(
        ~~~~~~~~~~^
    source,
    ^^^^^^^
...<5 lines>...
    optimize=optimize,
    ^^^^^^^^^^^^^^^^^^
)
^
File "/lib/python313.zip/_pyodide/_base.py", line 285, in __init__
self.ast = next(self._gen)
            ~~~~^^^^^^^^^^^
File "/lib/python313.zip/_pyodide/_base.py", line 149, in _parse_and_compile_gen
mod = compile(source, filename, mode, flags | ast.PyCF_ONLY_AST)`
            if (err.startsWith(errBeginning)) {
                err = err.slice(errBeginning.length);
            }
            document.getElementById("terminal").value += "\nERR: " + err;
        }
    }
};
setupPyodide();


document.getElementById("upload").onclick = function() {
    document.getElementById("hiddenUpload").click();
}
document.getElementById("hiddenUpload").onchange = function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        document.getElementById("editor").value = reader.result;
    };

    reader.onerror = function () {
        console.error('Error reading the file');
    };

    reader.readAsText(file, 'utf-8');
}
document.getElementById("editor").ondrop = function(dropEvent){
    dropEvent.preventDefault()
    const reader =new FileReader()

    reader.onload=function(readEvent){
        document.getElementById("editor").value = reader.result;
    }

    reader.onerror = function () {
        console.error('Error reading the file');
    };

    reader.readAsText(dropEvent.dataTransfer.files[0])
}

document.getElementById("download").onclick = function(uri, name) {
    var element = document.createElement('a');
    const codeContent = document.getElementById("output").value;
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(codeContent));
    element.setAttribute('download', "pitonico-program.pi");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}