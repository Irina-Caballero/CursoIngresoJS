/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

    //parseInt  funcion de transformar caracteres a nros enteros

	numeroUno=parseInt(numeroUno);
	numeroUno=txtIdNumeroUno.value;

	numeroDos=parseInt(numeroDos);
	numeroDos=txtIdNumeroDos.value;

	resultado=parseInt(resultado);

	resultado=numeroUno + numeroDos;

	alert( numeroUno + " más " + numeroDos + " es igual a " + resultado);

}

