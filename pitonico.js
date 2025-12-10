
var keywordTypes = ["true", "false", "none", "and", "or", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal", "not", "pass", "raise", "return", "try", "while", "with", "yield", "case", "match"];

var spanishToEnglish = {
    // keywords
    "keyword": {
        "Verdadero": "True",
        "Falso": "False",
        "Nulo": "None",
        "y": "and",
        "o": "or",
        "como": "as",
        "asegura": "assert",
        "asínc": "async",
        "aguarda": "await",
        "rompe": "break",
        "clase": "class",
        "continúa": "continue",
        "def": "def",
        "elim": "del",
        "osi": "elif",
        "otro": "else",
        "excepto": "except",
        "alfin": "finally",
        "para": "for",
        "de": "from",
        "global": "global",
        "si": "if",
        "importa": "import",
        "en": "in",
        "es": "is",
        "lambda": "lambda",
        "nolocal": "nonlocal",
        "no": "not",
        "omite": "pass",
        "lanza": "raise",
        "devuelve": "return",
        "intenta": "try",
        "mientras": "while",
        "con": "with",
        "genera": "yield",
        "caso": "case",
        "empareja": "match"
    },

    "function": {
        "__importa__": "__import__",
        "abs": "abs",
        "aiter": "aiter",
        "todos": "all",
        "asiguiente": "anext",
        "algún": "any",
        "ascii": "ascii",
        "bin": "bin",
        "bool": "bool",
        "interrupción": "breakpoint",
        "arreglodebytes": "bytearray",
        "bytes": "bytes",
        "invocable": "callable",
        "car": "chr",
        "métododeclase": "classmethod",
        "compila": "compile",
        "complejo": "complex",
        "derechos": "copyright",
        "créditos": "credits",
        "elimatr": "delattr",
        "dic": "dict",
        "dir": "dir",
        "muestra": "display",
        "divmód": "divmod",
        "enumera": "enumerate",
        "valora": "eval",
        "ejecuta": "exec",
        "ejecarchivo": "execfile",
        "filtra": "filter",
        "flota": "float",
        "formatea": "format",
        "conjuntoinmutable": "frozenset",
        "obteneatr": "getattr",
        "globales": "globals",
        "tieneatr": "hasattr",
        "hash": "hash",
        "ayuda": "help",
        "hex": "hex",
        "id": "id",
        "entrada": "input",
        "ent": "int",
        "esinstancia": "isinstance",
        "essubclase": "issubclass",
        "iter": "iter",
        "lar": "len",
        "licencia": "license",
        "lista": "list",
        "locales": "locals",
        "mapea": "map",
        "máx": "max",
        "vistadememoria": "memoryview",
        "min": "min",
        "siguiente": "next",
        "objeto": "object",
        "oct": "oct",
        "abre": "open",
        "ord": "ord",
        "pot": "pow",
        "imprime": "print",
        "propiedad": "property",
        "rango": "range",
        "repr": "repr",
        "invertido": "reversed",
        "redondea": "round",
        "ejecutaarchivo": "runfile",
        "conjunto": "set",
        "estableceatr": "setattr",
        "corta": "slice",
        "ordenado": "sorted",
        "métodoestático": "staticmethod",
        "cad": "str",
        "suma": "sum",
        "super": "super",
        "tupla": "tuple",
        "tipo": "type",
        "vars": "vars",
        "comprime": "zip"
    },

    "type": {
        "bool": "bool",
        "ent": "int",
        "flota": "float",
        "complejo": "complex",
        "cad": "str",
        "bytes": "bytes",
        "arreglodebytes": "bytearray",
        "vistadememoria": "memoryview",
        "lista": "list",
        "tupla": "tuple",
        "rango": "range",
        "dic": "dict",
        "conjunto": "set",
        "conjuntoinmutable": "frozenset",
        "corta": "slice",
        "objeto": "object",
        "tipo": "type",
        "NoTipo": "NoneType",
        "elipsis": "ellipsis",
        "TipoNoImplementado": "NotImplementedType",
        "función": "function",
        "función_o_método_incorporado": "builtin_function_or_method",
        "método": "method",
        "módulo": "module",
        "clase": "class"
    },

    "exception": {
        "ErrorDeAritmética": "ArithmeticError",
        "ErrorDeAsservación": "AssertionError",
        "ErrorDeAtributo": "AttributeError",
        "ErrorBase": "BaseException",
        "GrupoDeErroresBase": "BaseExceptionGroup",
        "ErrorDeIOBloqueo": "BlockingIOError",
        "ErrorDeTuberíaRota": "BrokenPipeError",
        "ErrorDeBúfer": "BufferError",
        "AdvertenciaDeBytes": "BytesWarning",
        "ErrorDeProcesoHijo": "ChildProcessError",
        "ErrorDeConexiónAbortada": "ConnectionAbortedError",
        "ErrorDeConexión": "ConnectionError",
        "ErrorDeConexiónRechazado": "ConnectionRefusedError",
        "ErrorDeConexiónReiniciado": "ConnectionResetError",
        "AdvertenciaDeDeprecación": "DeprecationWarning",
        "ErrorDeFinalDeArchivo": "EOFError",
        "TipoDeElipsis": "EllipsisType",
        "ErrorDeEntorno": "EnvironmentError",
        "GrupoDeExcepciones": "ExceptionGroup",
        "ErrorDeArchivoExiste": "FileExistsError",
        "ErrorDeArchivoNoEncontrado": "FileNotFoundError",
        "ErrorDeComaFlotante": "FloatingPointError",
        "AdvertenciaDeFuturo": "FutureWarning",
        "SalidaDeGenerador": "GeneratorExit",
        "ErrorDeES": "IOError",
        "ErrorDeImportar": "ImportError",
        "AdvertenciaDeImportación": "ImportWarning",
        "ErrorDeSangría": "IndentationError",
        "ErrorDeÍndice": "IndexError",
        "ErrorDeInterrupción": "InterruptedError",
        "ErrorDeEsDirectorio": "IsADirectoryError",
        "InterrupciónDeTeclado": "KeyboardInterrupt",
        "ErrorDeBúsqueda": "LookupError",
        "ErrorDeMemoria": "MemoryError",
        "ErrorDeMóduloNoEncontrado": "ModuleNotFoundError",
        "ErrorDeNombre": "NameError",
        "ErrorDeNoEsDirectorio": "NotADirectoryError",
        "ErrorDeNoImplementado": "NotImplementedError",
        "ErrorDeSO": "OSError",
        "ErrorDeDesbordamiento": "OverflowError",
        "AdvertenciaDeDeprecaciónPendiente": "PendingDeprecationWarning",
        "ErrorDePermiso": "PermissionError",
        "ErrorDeBúsquedaDeProceso": "ProcessLookupError",
        "ErrorDeRecursión": "RecursionError",
        "ErrorDeReferencia": "ReferenceError",
        "AdvertenciaDeRecurso": "ResourceWarning",
        "ErrorDeEjecución": "RuntimeError",
        "AdvertenciaDeEjecución": "RuntimeWarning",
        "FinDeIteraciónAsíncrona": "StopAsyncIteration",
        "FinDeIteración": "StopIteration",
        "ErrorDeSintaxis": "SyntaxError",
        "AdvertenciaDeSintaxis": "SyntaxWarning",
        "ErrorDeSistema": "SystemError",
        "SalidaDelSistema": "SystemExit",
        "ErrorDeTabulación": "TabError",
        "ErrorDeTiempoDeEspera": "TimeoutError",
        "ErrorDeTipo": "TypeError",
        "ErrorDeVariableLocalNoAsignada": "UnboundLocalError",
        "ErrorDeDecodificaciónUnicode": "UnicodeDecodeError",
        "ErrorDeCodificaciónUnicode": "UnicodeEncodeError",
        "ErrorDeUnicode": "UnicodeError",
        "ErrorDeTraducciónUnicode": "UnicodeTranslateError",
        "AdvertenciaDeUnicode": "UnicodeWarning",
        "AdvertenciaDeUsuario": "UserWarning",
        "ErrorDeValor": "ValueError",
        "Advertencia": "Warning",
        "ErrorDeDivisiónPorCero": "ZeroDivisionError"
    },
    
    "module": {
        "numpi": "numpy",
        "pandas": "pandas",
        "matgráfbib": "matplotlib.pyplot",
        "cipi": "scipy",
        "skaprende": "sklearn",
        "tensorflujo": "tensorflow",
        "antorcha": "torch",
        "cuerno": "keras",
        "solicitudes": "requests",
        "sh4": "bs4",
        "marinero": "seaborn",
        "gráfamente": "plotly",
        "kuln": "nltk", // kit de útiles de lenguaje natural
        "spacío": "spacy",
        "bokeh": "bokeh",
        "fechahora": "datetime",
        "calendario": "calendar",
        "so": "os",
        "sis": "sys",
        "json": "json",
        "re": "re",
        "registrar": "logging",
        "rutabib": "pathlib",
        "iterútil": "itertools",
        "funcútil": "functools",
        "colecciónes": "collections",
        "mat": "math",
        "aleatorio": "random",
        "operador": "operator",
        "csv": "csv",
        "archivozip": "zipfile",
        "gzip": "gzip",
        "archtemp": "tempfile",
        "shutil": "shutil",
        "subproceso": "subprocess",
        "hilos": "threading",
        "multiprocessos": "multiprocessing",
        "asincronía": "asyncio",
        "enchufe": "socket",
        "ccs": "ssl", // Capa de Conexión Segura
        "biburl.analizar": "urllib.parse",
        "biburl.solicitar": "urllib.request",
        "bibcontexto": "contextlib",
        "analizarconfig": "configparser",
        "sqlite3": "sqlite3",
        "tipado": "typing",
        "altair": "altair",
        "grafico9": "plotnine",
        "modelos_estadisticos": "statsmodels",
        "xarreglo": "xarray",
        "datarea": "dask",
        "geopandas": "geopandas",
        "formamente": "shapely",
        "impulsogx": "xgboost",
        "mpgluz": "lightgbm", // máquina potenciadora de gradiente de luz
        "catimpulso": "catboost",
        "visiónantorcha": "torchvision",
        "audioantorcha": "torchaudio",
        "datos_tensorflujo": "tensorflow_datasets",
        "antorchapi_relámpago": "pytorch_lightning",
        "transformadores": "transformers",
        "iarn": "onnx", // Intercambio Abierto de Redes Neuronales
        "bibtrabajos": "joblib",
        "h5pi": "h5py",
        "biburl3": "urllib3",
        "httpx": "httpx",
        "matraz": "flask",
        "django": "django",
        "apirapida": "fastapi",
        "httpasinc": "aiohttp",
        "bibxml": "lxml",
        "bibhtml5": "html5lib",
        "selenium": "selenium",
        "boto3": "boto3",
        "google-nube-*": "google-cloud-*",
        "probarpi": "pytest",
        "nariz": "nose",
        "clic": "click",
        "progreso": "tqdm",
        "probarunit": "unittest",
        "analizararg": "argparse",
        "configútil": "setuptools",
        "pip": "pip",
        "conda": "conda",
        "ipitonico": "ipython",
        "jupitar": "jupyter", // julia, pitonico, R (editar)
        "cuaderno": "notebook",
        "ahíestá": "voila",
        "Bicroma": "Pillow", // starts with "bib de imagenes"
        "dobpi": "pydub",
        "archsonido": "soundfile",
        "visionabierta": "opencv-python",
        "pilicula": "moviepy"
    },

    "method": {
        // common methods and attributes for libraries
        "aleaent": "randint",
        "esdigito": "isdigit",
        "minusculiza": "lower",
        "recortar": "strip",
        "ahora": "now",
        "año": "year",
        "mes": "month",
        "fecha": "date",
        "hora": "time",
        "hoy": "today",
        "analizatiempo": "strptime",
        "formateatiempo": "strftime",
        "diftiempo": "timedelta",
        "diasemana": "weekday",
        "rangomes": "monthrange",
        "arango": "arange",
        "ceros": "zeros",
        "unos": "ones",
        "linespacio": "linspace",
        "reforma": "reshape",
        "transpone": "transpose",
        "punto": "dot",
        "suma": "sum",
        "media": "mean",
        "estándar": "std",
        "mín": "min",
        "máx": "max",
        "aplana": "flatten",
        "ndim": "ndim",
        "tamaño": "size",
        "dtipo": "dtype",
        "T": "T",
        "cabeza": "head",
        "info": "info",
        "describe": "describe",
        "forma": "shape",
        "columnas": "columns",
        "indice": "index",
        "loc": "loc",
        "eloc": "iloc",
        "deja": "drop",
        "une": "merge",
        "junta": "join",
        "agrupapor": "groupby",
        "aplica": "apply",
        "pivote": "pivot",
        "derrete": "melt",
        "a_csv": "to_csv",
        "a_excel": "to_excel",
        "a_json": "to_json",
        "grafica": "plot",
        "muestra": "show",
        "figura": "figure",
        "subgraficas": "subplots",
        "disperión": "scatter",
        "hist": "hist",
        "bar": "bar",
        "linea": "line",
        "muestra_cuaderno": "output_notebook",
        "optimiza": "optimize",
        "integra": "integrate",
        "estad": "stats",
        "ajusta": "fit",
        "predice": "predict",
        "transforma": "transform",
        "ajusta_transforma": "fit_transform",
        "puntúa": "score",
        "compila": "compile",
        "evalúa": "evaluate",
        "cuda": "cuda",
        "a": "to",
        "numpi": "numpy",
        "requiere_grad": "requires_grad",
        "módulo.nn": "nn.Module",
        "adelanta": "forward",
        "DMatriz": "DMatrix",
        "Datos": "Dataset",
        "entrena": "train",
        "Impulsor": "Booster",
        "desde_preentrenado": "from_pretrained",
        "Entrenador": "Trainer",
        "carga_datos": "load_dataset",
        "carga": "load",
        "vuelca": "dump",
        "Archivo": "File",
        "obtén": "get",
        "envía": "post",
        "actualiza": "put",
        "borra": "delete",
        "encabeza": "head",
        "sesión": "session",
        "GestorPool": "PoolManager",
        "solicita": "request",
        "Cliente": "Client",
        "Matraz": "Flask",
        "ruta.app": "app.route",
        "ruta": "path",
        "config": "settings",
        "Modelo.modelos": "models.Model",
        "rápidaAPI": "FastAPI",
        "Depende": "Depends",
        "SesiónCliente": "ClientSession",
        "cliente": "client",
        "recurso": "resource",
        "lector": "reader",
        "escritor": "writer",
        "LectorDict": "DictReader",
        "EscritorDict": "DictWriter",
        "carga": "loads",
        "vuelca": "dumps",
        "coincide": "match",
        "busca": "search",
        "sust": "sub",
        "encuentratodo": "findall",
        "divide": "split",
        "ArchivoZip": "ZipFile",
        "abre": "open",
        "Ruta": "Path",
        "existe": "exists",
        "hzdir": "mkdir",
        "pegote": "glob",
        "lee_texto": "read_text",
        "escribe_texto": "write_text",
        "ArchivoTemporalNom": "NamedTemporaryFile",
        "DirectorioTemporal": "TemporaryDirectory",
        "copia": "copy",
        "copiaarbol": "copytree",
        "mueve": "move",
        "elimarbol": "rmtree",
        "ejec": "run",
        "Pabre": "Popen",
        "verifica_salida": "check_output",
        "conecta": "connect",
        "cursor": "Cursor",
        "ejecuta": "execute",
        "comete": "commit",
        "enumeradir": "listdir",
        "hazdirs": "makedirs",
        "une.ruta": "path.join",
        "obténentorno": "getenv",
        "varg": "argv",
        "sale": "exit",
        "configBásica": "basicConfig",
        "obténRegistrador": "getLogger",
        "alarma": "warning",
        "error": "error",
        "AnalizadorConfig": "ConfigParser",
        "cachea_lru": "lru_cache",
        "parcial": "partial",
        "envuelve": "wraps",
        "gestorcontexto": "contextmanager",
        "AnalizadorArgumentos": "ArgumentParser",
        "analiza_args": "parse_args",
        "Lista": "List",
        "Dic": "Dict",
        "Opcional": "Optional",
        "Cualquier": "Any",
        "Unión": "Union",
        "Hilo": "Thread",
        "Bloqueo": "Lock",
        "Proceso": "Process",
        "Piscina": "Pool",
        "reúne": "gather",
        "duerme": "sleep",
        "enchufe": "socket",
        "AF_INET": "AF_INET",
        "SOCK_FLUJO": "SOCK_STREAM",
        "crea_contexto_predet": "create_default_context",
        "envuelve_socket": "wrap_socket",
        "fijación": "fixture",
        "marca": "mark",
        "CasoPrueba": "TestCase",
        "principal": "main",
        "comando": "command",
        "opción": "option",
        "tqdm": "tqdm",
        "trango": "trange",
        "config": "setup",
        "encuentra_paquetes": "find_packages",
        "obtén_ipitonico": "get_ipython",
        "cuaderno": "notebook",
        "CuadernoApp": "NotebookApp",
        "Voilá": "Voila",
        "abre.Imagen": "Image.open",
        "guarda.Imagen": "Image.save",
        "redimensiona.Imagen": "Image.resize",
        "SegmentoAudio.desde_archivo": "AudioSegment.from_file",
        "exporta": "export",
        "lee": "read",
        "leeimg": "imread",
        "escribeimg": "imwrite",
        "muestraimg": "imshow",
        "CapturaVideo": "VideoCapture",
        "ClipVideo": "VideoFileClip",
        "concatena_videoclips": "concatenate_videoclips",
        "escribe_videofile": "write_videofile"
    },

    "identifier": {
        "__nuevo__": "__new__",
        "__inic__": "__init__",
        "__repr__": "__repr__",
        "__cad__": "__str__",
        "__bytes__": "__bytes__",
        "__formatea__": "__format__",
        "__mn__": "__lt__",
        "__mni__": "__le__",
        "__ig__": "__eq__",
        "__ni__": "__ne__",
        "__my__": "__gt__",
        "__myi__": "__ge__",
        "__hash__": "__hash__",
        "__bool__": "__bool__",
        "__obteneatr__": "__getattr__",
        "__obteneatributo__": "__getattribute__",
        "__estableceatr__": "__setattr__",
        "__elimatr__": "__delattr__",
        "__dir__": "__dir__",
        "__tamañode__": "__sizeof__",

        "__sum__": "__add__",
        "__res__": "__sub__",
        "__mul__": "__mul__",
        "__matmul__": "__matmul__",
        "__divpreciso__": "__truediv__",
        "__divent__": "__floordiv__",
        "__mód__": "__mod__",
        "__divmód__": "__divmod__",
        "__pot__": "__pow__",
        "__imueve__": "__lshift__",
        "__dmueve__": "__rshift__",
        "__y__": "__and__",
        "__xo__": "__xor__",
        "__o__": "__or__",

        "__isum__": "__iadd__",
        "__ires__": "__isub__",
        "__imul__": "__imul__",
        "__imatmul__": "__imatmul__",
        "__idivpreciso__": "__itruediv__",
        "__idivent__": "__ifloordiv__",
        "__imód__": "__imod__",
        "__ipot__": "__ipow__",
        "__iimueve__": "__ilshift__",
        "__idmueve__": "__irshift__",
        "__iy__": "__iand__",
        "__ixo__": "__ixor__",
        "__io__": "__ior__",

        "__neg__": "__neg__",
        "__pos__": "__pos__",
        "__abs__": "__abs__",
        "__invierte__": "__invert__",
        "__complejo__": "__complex__",
        "__ent__": "__int__",
        "__flota__": "__float__",
        "__índice__": "__index__",
        "__redondea__": "__round__",

        "__lar__": "__len__",
        "__obteneítem__": "__getitem__",
        "__estableceítem__": "__setitem__",
        "__elimítem__": "__delitem__",
        "__contiene__": "__contains__",
        "__iter__": "__iter__",
        "__siguiente__": "__next__",
        "__invertido__": "__reversed__",

        "__invoca__": "__call__",
        "__entra__": "__enter__",
        "__sale__": "__exit__",

        "__obtene__": "__get__",
        "__establece__": "__set__",
        "__elim__": "__delete__",

        "__aguarda__": "__await__",
        "__aiter__": "__aiter__",
        "__asiguiente__": "__anext__",
        "__aentra__": "__aenter__",
        "__asale__": "__aexit__"
    }
};
var englishToSpanish = {};
for (let k of Object.keys(spanishToEnglish)) {
    englishToSpanish[k] = {};
    for (let k2 of Object.keys(spanishToEnglish[k])) {
        englishToSpanish[k][spanishToEnglish[k][k2]] = k2;
    }
}
var englishWords = [];
for (let k of Object.keys(spanishToEnglish)) {
    englishWords = englishWords.concat(Object.values(spanishToEnglish[k]))
}
var spanishWords = [];
for (let k of Object.keys(spanishToEnglish)) {
    spanishWords = spanishWords.concat(Object.keys(spanishToEnglish[k]))
}




import { Parser, Language } from './node_modules/web-tree-sitter/tree-sitter.js';

await Parser.init({
    locateFile: fileName => `./node_modules/web-tree-sitter/${fileName}`
});

const PI = await Language.load(
    './wasm/tree-sitter-pitonico.wasm'
);
const PY = await Language.load(
    './wasm/tree-sitter-python.wasm'
);

const parser = new Parser();

export function translate_to_pitonico(src) {
    translate_pitonico(src, true);
}
export function translate_from_pitonico(src) {
    translate_pitonico(src, false);
}

export function translate_pitonico(src, toPitonico) {
    let unsafeWords, translation;
    if (toPitonico) {
        parser.setLanguage(PY);
        unsafeWords = spanishWords;
        translation = englishToSpanish;
    } else {
        parser.setLanguage(PI);
        unsafeWords = englishWords;
        translation = spanishToEnglish;
    }
    const tree = parser.parse(src);

    // Collect edits only for true keyword positions
    const edits = [];
    function walk(node, childIndex) {
        if (node.childCount !== 0) {
            for (let i = 0; i < node.childCount; i++) {
                walk(node.child(i), i);
            }
            return;
        }

        const fancyType = findFancyType(node, childIndex);

        if (!fancyType) {
            return;
        }

        let replacement;
        const dict = translation[fancyType];
        if (dict && node.text in dict) {
            replacement = dict[node.text];
        } else if (unsafeWords.includes(node.text)) {
            replacement = node.text+"_pi_tr";
        } else {
            return;
        }
        edits.push({
            start: node.startIndex,
            end: node.endIndex,
            replacement: replacement
        });
    }
    walk(tree.rootNode);
    
    // Apply replacements from bottom-up
    edits.sort((a,b) => b.start - a.start);
    let result = src;
    for (const {start, end, replacement} of edits)
        result = result.slice(0,start) + replacement + result.slice(end);
    return result;
}

function findFancyType(node, childIndex) {
    const typeConditions = [
        {type: "method", gp: "call", p: "attribute", t: "identifier", ci: 2},
        {type: "method", p: "attribute", t: "identifier", ci: 2}, // "attribute"
        {type: "module", gp: "import_from_statement", p: "dotted_name", t: "identifier", ci: 0},
        {type: "module", gp: "aliased_import", p: "dotted_name", t: "identifier"},
        {type: "module", gp: "import_statement", p: "dotted_name", t: "identifier"},
        {type: "exception", gp: "except_clause", p: "as_pattern", t: "identifier", ci: 0},
        {type: "exception", gp: "raise_statement", p: "call", t: "identifier", ci: 0},

        {type: "module", p: "attribute", t: "identifier", ci: 0}, // "object"
        {type: "function", p: "call", t: "identifier"},
        {type: "type", p: "type", t: "identifier"},
        {type: "module alias", p: "aliased_import", t: "identifier", ci: 2}, // unused for now
        {type: "function", p: "decorator", t: "identifier", ci: 1}, // "decorator"
    ];


    const type = node.type;
    const parentType = node.parent?.type;
    const grandparentType = node.parent?.parent?.type;

    if (keywordTypes.includes(node.type))
        return "keyword";
    
    for (const condition of typeConditions) {
        if ((!grandparentType || !condition.gp || condition.gp === grandparentType) &&
            (!parentType || !condition.p || condition.p === parentType) &&
            (!type || condition.t === type) &&
            (!condition.ci || condition.ci === childIndex)
        ) {
            return condition.type;
        }
    }
    if (node.type === "identifier")
        return "identifier";

    return undefined;
}