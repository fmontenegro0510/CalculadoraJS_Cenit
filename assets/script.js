
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


