
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

/**
 * Resuelve la operacion matematica descripta en el display y lo muestra en el display
 *
 * @return {number} The result of the evaluated expression.
 */

const resolver = () => {
    //Obtener el valor
    let x = document.getElementById('display').value;
    //Evaluar la operacion matematica y devolver el resultado
    let y = eval(x);
    //Mostrar el resultado en el display 
    document.getElementById('display').value = y;
}

//admitir solo numeros en el display 
document.getElementById('display').addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key >= '0' && e.key <= '9') {
        console.log(e.key + " es un numero");
        showDisplay(e.key);
    }
})


function insertNavbar(divId) {
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
  


  //validar la entrada del usuario desde el display

const allowedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const inputElement = document.getElementById('input1');
function validateInput(event) {
    const currentValue = inputElement.value;
    const lastChar = currentValue[currentValue.length - 1];
    if (!allowedChars.includes(lastChar)) {
        inputElement.value = currentValue.slice(0, currentValue.length - 1);
    }
}
 
window.addEventListener('load', function() {
    //verifico si se ejecuto el evento load
    console.log('loaded');
    //inserto en el div navbar la barra de navegacion
    insertNavbar('navbar');
});






