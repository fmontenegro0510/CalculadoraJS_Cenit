
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
const dm =()=>{
   !flagDarkMode ? document.getElementById("html").classList ="dark" : document.getElementById("html").classList ="light";
    flagDarkMode=!flagDarkMode;
}

let cifra = 0;
//borrar el contenido del display
    const clearDisplay = () => document.getElementById("display").value = 0


//Eventos a tener en cuenta

/*
una tecla numérica (0-9)
una tecla de operador ( + , -,×,÷)
la tecla decimal
la tecla de igualdad
la tecla "clear"
*/