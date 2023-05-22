
/*
       _  _____    _____      _            _           _                 
      | |/ ____|  / ____|    | |          | |         | |                
      | | (___   | |     __ _| | ___ _   _| | __ _  __| | ___  _ __ __ _ 
  _   | |\___ \  | |    / _` | |/ __| | | | |/ _` |/ _` |/ _ \| '__/ _` |
 | |__| |____) | | |___| (_| | | (__| |_| | | (_| | (_| | (_) | | | (_| |
  \____/|_____/   \_____\__,_|_|\___|\__,_|_|\__,_|\__,_|\___/|_|  \__,_|
                                                                         
*/ 
//By Francisco Montenegro - 2023

//Dark Mode
flagDarkMode = false;
const DarkMode =()=>{
   !flagDarkMode ? document.getElementById("html").classList ="dark" : document.getElementById("html").classList ="light";
    flagDarkMode=!flagDarkMode;
}
//borrar el contenido del display
const clearDisplay = () => document.getElementById("display").value = ""

//Show in display press numbers
const showDisplay = (value) =>document.getElementById("display").value += value

const resolver = () => {
    //Obtener el valor
    let x = document.getElementById('display').value;
    //Evaluar la operacion matematica y devolver el resultado
    let y = eval(x);
    //Mostrar el resultado en el display 
    document.getElementById('display').value = y;
}

//contenedor
const container = `<div id="container" class="paper container"> </div>`;
//navbar
const navbarHtml = `
<nav class="border fixed split-nav">
    <div class="nav-brand">
    <h3><a>Calculadora Javascript</a></h3>
    </div>
    <div class="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible1">
    <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </label>
    <div class="collapsible-body">
        <ul class="inline">
        <li><a href="#" onclick="DarkMode()">Dark Mode</a></li>
        <li><a href="https://github.com/fmontenegro0510/CalculadoraJS_Cenit" target="_blank">Github</a></li>
        </ul>
    </div>
    </div>
</nav>
`;

//divCalculadora
const divCalculadora = `<div id="calculadora"> </div>`;

//Display
//Botones

const insertNavbar = (divId) => {
    const navbarHtml = `
    <nav class="border fixed split-nav">
        <div class="nav-brand">
        <h3><a>Calculadora Javascript</a></h3>
        </div>
        <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1">
        <label for="collapsible1">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </label>
        <div class="collapsible-body">
            <ul class="inline">
            <li><a href="#" onclick="DarkMode()">Dark Mode</a></li>
            <li><a href="https://github.com/fmontenegro0510/CalculadoraJS_Cenit" target="_blank">Github</a></li>
            </ul>
        </div>
        </div>
    </nav>
    `;
    const divElement = document.getElementById(divId);
    divElement.innerHTML = navbarHtml;
}

const agregarElementos = (idDiv, elto) => {
    const divTarget = document.getElementById(idDiv);
    divTarget.innerHTML += elto; 
}  

//Evento load - se ejecuta cuando se carga completamente la pagina  
window.addEventListener('load', function() {
    //verifico si se ejecuto el evento load
    console.log('loaded');
    agregarElementos('app', container);
    agregarElementos('container', navbarHtml);






    //inserto en el div navbar la barra de navegacion
    insertNavbar('navbar');
});




