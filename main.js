let nombre=prompt("Ingrese su nombre y apellido");
let cursos=prompt("Ingrese el numero de curso");
while (cursos != 57){
    alert("curso equivocado")
    cursos=prompt("Ingrese su curso nuevamente: ")
}if(cursos==57){
    alert(nombre+" Ingreso al curso "+cursos)
}

function playmusic1(){
    document.getElementById("musica1").play();
}
