function getDatos()
{
    var nombre=prompt("Nombre","");
    var edad = prompt("Edad" , 0);

    var div1 = document.getElementById("nombre");
    div1.innerHTML= "<h3>Nombre: " +nombre+ "</h3";

    var div1 = document.getElementById("edad");
    div1.innerHTML= "<h3>Edad: " +edad+ "</h3";
}