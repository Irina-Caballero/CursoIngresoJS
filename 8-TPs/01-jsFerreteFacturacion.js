/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{    
    //declarar variables
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    //Tomo los datos por ID
    precioUno=txtIdPrecioUno.value;
    //Parsear los datos
    precioUno=parseInt(precioUno);

    precioDos=txtIdPrecioDos.value;
    precioDos=parseInt(precioDos);

    precioTres=txtIdPrecioTres.value;
    precioTres=parseInt(precioTres);

    suma= precioUno+precioDos+precioTres;

    // es más preciso que en el alert
    suma= suma.toFixed(2);

    alert("el resultado es " + suma.toFixed(2));
    //alert("la suma de " + precioUno + precioDos + precioTres + " da" + resultado);


	
}
function Promedio () 

{
    
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno=txtIdPrecioUno.value;
    precioUno=parseFloat(precioUno);

    precioDos=txtIdPrecioDos.value;
    precioDos=parseFloat(precioDos);

    precioTres=txtIdPrecioTres.value;
    precioTres=parseFloat(precioTres);

    
     promedio= (precioUno + precioDos + precioTres) / 3;

     alert("el promedio es " + promedio.toFixed(2));




	
}

function PrecioFinal () 
{

	let precioUno;
    let precioDos;
    let precioTres;
    let precioFinal;
    let suma;

    precioUno=txtIdPrecioUno.value;
    precioUno=parseFloat(precioUno);

    precioDos=txtIdPrecioDos.value;
    precioDos=parseFloat(precioDos);

    precioTres=txtIdPrecioTres.value;
    precioTres=parseFloat(precioTres);

    suma= precioUno + precioDos + precioTres;

    precioFinal= (precioUno + precioDos + precioTres) * 1.21;

    alert("El precio final más Iva 21% es: " + precioFinal.toFixed(2));




}