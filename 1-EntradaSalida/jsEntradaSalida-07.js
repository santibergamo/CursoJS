/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function dividir() {
  let numero1
  let numero2
  let dividir

  numero1 = document.getElementById("txtNumeroUno").value
  numero2 = document.getElementById("txtNumeroDos").value
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  dividir = numero1 / numero2;
  alert ("La Division es " + dividir );

}

