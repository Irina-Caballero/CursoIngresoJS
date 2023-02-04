/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let cantidadAlambre;
    let perimetro;

    largoTerreno=txtIdLargo.value;
    anchoTerreno=txtIdAncho.value;
    
    largoTerreno=parseFloat(anchoTerreno);
    anchoTerreno=parseFloat(anchoTerreno);

    perimetro= (largoTerreno +  anchoTerreno) * 2;

    cantidadAlambre = perimetro* 3; 
    alert( "se necesitan: " + cantidadAlambre + " metros");


    


}
function Circulo () 
{
    let radiodelCirculo;
    let cantidadAlambre;
    let perimetro;

    radiodelCirculo= txtIdRadio.value;

    radiodelCirculo=parseFloat(radiodelCirculo);

    perimetro = 2 * Math.PI * radiodelCirculo;

    cantidadAlambre= perimetro * 3;

    alert("La cantidad de alambre que hay que comprar es: " + cantidadAlambre.toFixed(2) + " metros");


	
}
function Materiales () 
{
	
}