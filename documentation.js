
const language = window.navigator.userLanguage || window.navigator.language;
const isSpanish = language.startsWith("es");

if (isSpanish) {
    document.getElementsByClassName("nav-link")[0].textContent = "Simulador";
    document.getElementsByClassName("nav-link")[1].textContent = "Documentación";
}

const data = {
    "keyword": [
        {
            title: 'Verdadero',
            eng: 'True',
            desc: 'A value that represents truth',
            esdesc: 'Un valor que representa la verdad',
            source: 'https://www.w3schools.com/python/python_booleans.asp'
        },
        {
            title: 'Falso',
            eng: 'False',
            desc: 'A value that represents falseness',
            esdesc: 'Un valor que representa la falsedad',
            source: 'https://www.w3schools.com/python/python_booleans.asp'
        },
        {
            title: 'Nulo',
            eng: 'None',
            desc: 'A value that represents nothing, or a null value',
            esdesc: 'Un valor que representa nada o un valor nulo',
            source: 'https://www.w3schools.com/python/ref_keyword_none.asp'
        },
        {
            title: 'y',
            eng: 'and',
            desc: 'An operator that only gives True if both the left and right values are True. Otherwise, it gives False.',
            esdesc: 'Un operador que solo devuelve Verdadero si ambos valores, izquierdo y derecho, son Verdaderos. De lo contrario, devuelve Falso.',
            source: 'https://www.w3schools.com/python/python_operators.asp'
        },
        {
            title: 'o',
            eng: 'or',
            desc: 'An operator that gives True if either the left and right values are True (or both). Otherwise, it gives False.',
            esdesc: 'Un operador que devuelve Verdadero si alguno de los valores, izquierdo o derecho, es Verdadero (o ambos). De lo contrario, devuelve Falso.',
            source: 'https://www.w3schools.com/python/python_operators.asp'
        },
        {
            title: 'como',
            eng: 'as',
            desc: 'Used to create an alias when importing a module or handling exceptions.',
            esdesc: 'Se usa para crear un alias al importar un módulo o manejar excepciones.',
            source: 'https://www.w3schools.com/python/ref_keyword_as.asp'
        },
        {
            title: 'asegura',
            eng: 'assert',
            desc: 'Used for debugging; tests if a condition is true, otherwise raises an AssertionError.',
            esdesc: 'Se usa para depuración; prueba si una condición es verdadera, de lo contrario lanza un AssertionError.',
            source: 'https://www.w3schools.com/python/ref_keyword_assert.asp'
        },
        {
            title: 'asínc',
            eng: 'async',
            desc: 'Used to declare a function as asynchronous so it can run concurrently with other code.',
            esdesc: 'Se usa para declarar una función como asíncrona para que pueda ejecutarse junto con otro código.',
            source: 'https://www.geeksforgeeks.org/python/python-async/'
        },
        {
            title: 'aguarda',
            eng: 'await',
            desc: 'Used to wait for an asynchronous operation to complete before continuing.',
            esdesc: 'Se usa para esperar a que una operación asíncrona termine antes de continuar.',
            source: 'https://www.geeksforgeeks.org/python/await-in-python/'
        },
        {
            title: 'rompe',
            eng: 'break',
            desc: 'Stops a loop before it has looped through all items.',
            esdesc: 'Detiene un bucle antes de que haya recorrido todos los elementos.',
            source: 'https://www.w3schools.com/python/ref_keyword_break.asp'
        },
        {
            title: 'clase',
            eng: 'class',
            desc: 'Used to define a new user-defined class.',
            esdesc: 'Se usa para definir una nueva clase definida por el usuario.',
            source: 'https://www.w3schools.com/python/ref_keyword_class.asp'
        },
        {
            title: 'continúa',
            eng: 'continue',
            desc: 'Skips the rest of the code inside a loop for the current iteration and moves to the next iteration.',
            esdesc: 'Omite el resto del código dentro de un bucle para la iteración actual y pasa a la siguiente.',
            source: 'https://www.w3schools.com/python/ref_keyword_continue.asp'
        },
        {
            title: 'def',
            eng: 'def',
            desc: 'Used to define a new function.',
            esdesc: 'Se usa para definir una nueva función.',
            source: 'https://www.w3schools.com/python/ref_keyword_def.asp'
        },
        {
            title: 'elim',
            eng: 'del',
            desc: 'Used to delete objects such as variables, lists, or dictionary elements.',
            esdesc: 'Se usa para eliminar objetos como variables, listas o elementos de diccionarios.',
            source: 'https://www.w3schools.com/python/ref_keyword_del.asp'
        },
        {
            title: 'osi',
            eng: 'elif',
            desc: 'Used in conditional statements, same as "else if" in other languages.',
            esdesc: 'Se usa en sentencias condicionales, igual que "else if" en otros lenguajes.',
            source: 'https://www.w3schools.com/python/ref_keyword_elif.asp'
        },
        {
            title: 'otro',
            eng: 'else',
            desc: 'Used with if statements to execute a block of code when the condition is false.',
            esdesc: 'Se usa con sentencias if para ejecutar un bloque de código cuando la condición es falsa.',
            source: 'https://www.w3schools.com/python/ref_keyword_else.asp'
        },
        {
            title: 'excepto',
            eng: 'except',
            desc: 'Used with try to handle exceptions (errors) that occur in the try block.',
            esdesc: 'Se usa con try para manejar excepciones (errores) que ocurren en el bloque try.',
            source: 'https://www.w3schools.com/python/ref_keyword_except.asp'
        },
        {
            title: 'alfin',
            eng: 'finally',
            desc: 'Used with try to execute code no matter if there is an exception or not.',
            esdesc: 'Se usa con try para ejecutar código sin importar si ocurre una excepción o no.',
            source: 'https://www.w3schools.com/python/ref_keyword_finally.asp'
        },
        {
            title: 'para',
            eng: 'for',
            desc: 'Used to create a for loop that iterates over a sequence (such as a list or range).',
            esdesc: 'Se usa para crear un bucle for que itera sobre una secuencia (como una lista o un rango).',
            source: 'https://www.w3schools.com/python/ref_keyword_for.asp'
        },
        {
            title: 'de',
            eng: 'from',
            desc: 'Used to import specific parts of a module.',
            esdesc: 'Se usa para importar partes específicas de un módulo.',
            source: 'https://www.w3schools.com/python/ref_keyword_from.asp'
        },
        {
            title: 'global',
            eng: 'global',
            desc: 'Used to declare a variable as global, meaning it can be accessed outside the current scope.',
            esdesc: 'Se usa para declarar una variable como global, lo que significa que puede ser accedida fuera del ámbito actual.',
            source: 'https://www.w3schools.com/python/ref_keyword_global.asp'
        },
        {
            title: 'si',
            eng: 'if',
            desc: 'Used to make conditional decisions in code.',
            esdesc: 'Se usa para tomar decisiones condicionales en el código.',
            source: 'https://www.w3schools.com/python/ref_keyword_if.asp'
        },
        {
            title: 'importa',
            eng: 'import',
            desc: 'Used to import a module into the current namespace.',
            esdesc: 'Se usa para importar un módulo en el espacio de nombres actual.',
            source: 'https://www.w3schools.com/python/ref_keyword_import.asp'
        },
        {
            title: 'en',
            eng: 'in',
            desc: 'Used to check if a value is present in a sequence (like a list or string).',
            esdesc: 'Se usa para comprobar si un valor está presente en una secuencia (como una lista o cadena).',
            source: 'https://www.w3schools.com/python/ref_keyword_in.asp'
        },
        {
            title: 'es',
            eng: 'is',
            desc: 'Used to test if two variables refer to the same object.',
            esdesc: 'Se usa para probar si dos variables se refieren al mismo objeto.',
            source: 'https://www.w3schools.com/python/ref_keyword_is.asp'
        },
        {
            title: 'lambda',
            eng: 'lambda',
            desc: 'Used to create small anonymous functions inline.',
            esdesc: 'Se usa para crear pequeñas funciones anónimas en una sola línea.',
            source: 'https://www.w3schools.com/python/ref_keyword_lambda.asp'
        },
        {
            title: 'nolocal',
            eng: 'nonlocal',
            desc: 'Used to declare a variable inside a nested function as referring to a variable in the enclosing scope.',
            esdesc: 'Se usa para declarar que una variable dentro de una función anidada hace referencia a una variable del ámbito externo.',
            source: 'https://www.w3schools.com/python/ref_keyword_nonlocal.asp'
        },
        {
            title: 'no',
            eng: 'not',
            desc: 'A logical operator that inverts the Boolean value of its operand.',
            esdesc: 'Un operador lógico que invierte el valor booleano de su operando.',
            source: 'https://www.w3schools.com/python/python_operators.asp'
        },
        {
            title: 'omite',
            eng: 'pass',
            desc: 'A null statement that does nothing; used as a placeholder.',
            esdesc: 'Una declaración nula que no hace nada; se usa como marcador de posición.',
            source: 'https://www.w3schools.com/python/ref_keyword_pass.asp'
        },
        {
            title: 'lanza',
            eng: 'raise',
            desc: 'Used to raise an exception manually.',
            esdesc: 'Se usa para generar una excepción manualmente.',
            source: 'https://www.w3schools.com/python/ref_keyword_raise.asp'
        },
        {
            title: 'devuelve',
            eng: 'return',
            desc: 'Used to exit a function and return a value.',
            esdesc: 'Se usa para salir de una función y devolver un valor.',
            source: 'https://www.w3schools.com/python/ref_keyword_return.asp'
        },
        {
            title: 'intenta',
            eng: 'try',
            desc: 'Used to handle exceptions; contains code that might cause an error.',
            esdesc: 'Se usa para manejar excepciones; contiene código que podría causar un error.',
            source: 'https://www.w3schools.com/python/ref_keyword_try.asp'
        },
        {
            title: 'mientras',
            eng: 'while',
            desc: 'Used to create a while loop that executes as long as a condition is true.',
            esdesc: 'Se usa para crear un bucle while que se ejecuta mientras una condición sea verdadera.',
            source: 'https://www.w3schools.com/python/ref_keyword_while.asp'
        },
        {
            title: 'con',
            eng: 'with',
            desc: 'Used to simplify resource management (like opening and closing files).',
            esdesc: 'Se usa para simplificar la gestión de recursos (como abrir y cerrar archivos).',
            source: 'https://www.w3schools.com/python/ref_keyword_with.asp'
        },
        {
            title: 'genera',
            eng: 'yield',
            desc: 'Used to return a generator from a function, pausing its state between calls.',
            esdesc: 'Se usa para devolver un generador desde una función, pausando su estado entre llamadas.',
            source: 'https://www.w3schools.com/python/ref_keyword_yield.asp'
        },
        {
            title: 'caso',
            eng: 'case',
            desc: 'Used inside a match statement to define a pattern to compare against.',
            esdesc: 'Se usa dentro de una sentencia match para definir un patrón con el cual comparar.',
            source: 'https://www.w3schools.com/python/ref_keyword_match_case.asp'
        },
        {
            title: 'empareja',
            eng: 'match',
            desc: 'Introduces structural pattern matching to test values against multiple patterns.',
            esdesc: 'Introduce la coincidencia de patrones estructurales para probar valores contra varios patrones.',
            source: 'https://www.w3schools.com/python/ref_keyword_match_case.asp'
        }
    ]
};

function titleCase(s) {
    return s.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// 4. Grab template + container
const tpl = document.getElementById('product-card');
const container = document.getElementById('mainContainer');

for (const groupName in data) {
    const group = data[groupName];
    const title = document.createElement("pre");
    title.classList.add('h2', 'm-0', 'title', 'fw-bold');
    title.innerText = titleCase(groupName);
    container.appendChild(title);

    group.forEach(p => {

        // clone the template
        const clone = tpl.content.cloneNode(true);

        clone.querySelector('.title').textContent = p.title;
        clone.querySelector('.type').textContent = p.type;
        clone.querySelector('.eng').textContent = "English: "+p.eng;
        clone.querySelector('.esdesc').textContent = p.esdesc;
        clone.querySelector('.desc').textContent = p.desc;
        clone.querySelector('.source').textContent = p.source;
        clone.querySelector('.source').href = p.source;

        // append to row
        container.appendChild(clone);
    });
}