let nombre=prompt("Ingrese su nombre y apellido");

if (nombre =" "){
    alert("porfavor ingrese su nombre y apellido")
    nombre=prompt("Ingrese su nombre y apellido nuevamente: ")
}else{
    alert("Bienvenido "+nombre)
}
function playmusic1(){
    document.getElementById("musica1").play();
}
