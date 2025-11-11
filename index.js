const language = window.navigator.userLanguage || window.navigator.language;
const isSpanish = language.startsWith("es");

if (isSpanish) {
    document.getElementsByClassName("nav-link")[0].textContent = "Simulador";
    document.getElementsByClassName("nav-link")[1].textContent = "Documentación";
    
    document.getElementById("head-text").textContent = "Programar ya es bastante difícil en tu propio idioma. ¡Con Pitonico, puedes programar en Python usando palabras clave en español!";
    document.getElementById("sub-text").textContent = "Este proyecto está en desarrollo. Si tienes sugerencias, ¡participa en GitHub!";
    document.getElementById("code-btn").textContent = "¡Empieza a programar!";
}

document.getElementById("code-btn").addEventListener("click", ()=>{
    window.location = "sandbox.html";
});
document.getElementById("github-btn").addEventListener("click", ()=>{
    window.location = "https://github.com/witte-workbench/pitonico";
});