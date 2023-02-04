/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;

		//se parsea despues de ID.


	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	
	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);


	resultado= numeroUno + numeroDos;
    
	alert( numeroUno + " más " + numeroDos + " es igual a " + resultado);

}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	
	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	
	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);


	resultado=parseInt(resultado);

	resultado= numeroUno - numeroDos;

	alert(numeroUno + " menos " + numeroDos + " es igual a " + resultado);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);


	resultado=parseInt(resultado);

	resultado= numeroUno * numeroDos;

	alert(numeroUno + " por " + numeroDos + " es igual a " + resultado);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	
	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);


	resultado=parseInt(resultado);

	resultado= numeroUno / numeroDos;

	alert(numeroUno + " dividido " + numeroDos + " es igual a " + resultado);
}

