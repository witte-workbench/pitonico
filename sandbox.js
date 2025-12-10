function $(id) {
    return document.getElementById(id);
}

const language = window.navigator.userLanguage || window.navigator.language;
const isSpanish = language.startsWith("es");

if (isSpanish) {
    document.getElementsByClassName("nav-link")[0].textContent = "Simulador";
    document.getElementsByClassName("nav-link")[1].textContent = "Documentación";
    
    $("convertPrimary").getElementsByTagName("span")[0].textContent = "Converte Al Inglés";
    $("convertSecondary").getElementsByTagName("span")[0].textContent = "Converte Al Español";
    $("codeInputTitle").textContent = "Entrada de Código";
    $("codeOutputTitle").textContent = "Salida de Código";
    $("upload").getElementsByTagName("span")[0].textContent = "Subir";
    $("download").getElementsByTagName("span")[0].textContent = "Descargar";
    $("hide").getElementsByTagName("span")[0].textContent = "Esconder";
    $("run").getElementsByTagName("span")[0].textContent = "Ejecutar";
    $("clear").getElementsByTagName("span")[0].textContent = "Limpiar";
}



import { translate_pitonico } from './module/pitonico.js';

$('convertPrimary').addEventListener('click', ()=>{
    translate(!isSpanish);
});
$('convertSecondary').addEventListener('click', ()=>{
    translate(isSpanish);
});

var timerInterval;
function translate(direction) {
    $('output').value = "";
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    const src = $('editor').value;
    
    let result = translate_pitonico(src, direction);

    if (result.length > 1000) {
        $('output').value = result;
    } else {
        let i=0;
        function addLetter() {
            if (i === result.length) {
                clearInterval(timerInterval);
                return;
            }
            do {
                $('output').value += result[i];
                i++;
            } while ((result[i] === ' ') || (result[i] === '\t') || (result[i] === '\n'));
        }
        timerInterval = setInterval(addLetter, 4);
    }
}
$('editor').addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
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
    $("run").classList.remove("btn-secondary");
    $("run").classList.add("btn-success");

    pyodide.setStdin({"stdin": function(){return prompt("Input: ")}, "istty": false});
    pyodide.setStdout({batched: (str) => {
        $("terminal").value += "\n" + str;
    }})
    pyodide.setStderr({batched: (err) => {
        $("terminal").value += "\nERR: " + err;
    }})

    $("clear").onclick = function() {
        $("terminal").value = "";
    }

    $("run").onclick = async function() {
        try {
            const result = await pyodide.runPythonAsync(
                $("output").value
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
            $("terminal").value += "\nERR: " + err;
        }
    }
};
setupPyodide();


$("upload").onclick = function() {
    $("hiddenUpload").click();
}
$("hiddenUpload").onchange = function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        $("editor").value = reader.result;
    };

    reader.onerror = function () {
        console.error('Error reading the file');
    };

    reader.readAsText(file, 'utf-8');
}
$("editor").ondrop = function(dropEvent){
    dropEvent.preventDefault()
    const reader = new FileReader()

    reader.onload = function(){
        $("editor").value = reader.result;
    }

    reader.onerror = function () {
        console.error('Error reading the file');
    };

    reader.readAsText(dropEvent.dataTransfer.files[0])
}

$("download").onclick = function() {
    var element = document.createElement('a');
    const codeContent = $("output").value;
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(codeContent));
    element.setAttribute('download', "pitonico-program.pi");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

$("hide").onclick = function() {
    $('terminal').style.display = ($('terminal').style.display == "none") ? "" : "none";
}