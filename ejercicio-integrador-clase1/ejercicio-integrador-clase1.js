
function mostrar()
{
     // dniTitular fechaInicio
    let razonsocial;
    let nombretitular;
    let dniTitular; 
    let fechaInicio;

    razonsocial=prompt("Ingrese su razon social");
    nombretitular=prompt("Nombre del titular");

    dniTitular=txtIddniTitular.value; 
    dniTitular=parseInt(dniTitular);

    fechaInicio=txtIdfechaInicio.value;
    fechaInicio=parseInt(fechaInicio);


    alert("su causa es " + razonsocial + "se llama " + nombretitular + fechaInicio + "30-"+dniTitular+"-9");


}
