//dark mode
flagDarkMode = false;
const dm =()=>{
   !flagDarkMode ? document.getElementById("html").classList ="dark" : document.getElementById("html").classList ="light";
    flagDarkMode=!flagDarkMode;
}

let cifra = 0;
//borrar el contenido del display
    const clearDisplay = () => document.getElementById("display").value = 0


