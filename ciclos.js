let seguir = true;

while (seguir === true) {
  let valor1 = prompt(`Introduzca un valor`);
  let valor2 = prompt(`Introduzca el otro valor`);
  let comprobacion1 = /^[-0-9]+$/;
  let SUMA = valor1 - valor2 * -1;
  let RESTA = valor1 - valor2;
  let MULTIPLO = valor1 * valor2;
  let DIVIDE = valor1 / valor2;

  if (valor2.match(comprobacion1) && valor1.match(comprobacion1)) {
    alert(`Si lo que quieres es sumar, tu resultado es:  ${valor1} + ${valor2} = ${SUMA} 
  \nSi lo que quieres es restar, el resultado es: ${valor1} - ${valor2} = ${RESTA} 
  \nSi tu intencion era multiplicar, debes saber que: ${valor1} * ${valor2} = ${MULTIPLO} 
  \nSi finalmente, lo que querias es dividir, entonces te muestro: ${valor1} / ${valor2} = ${DIVIDE}`);
  } else if (valor1 == "" || valor2 == "") {
    alert(`Ha dejado al menos un campo vacio`);
  } else {
    alert(`Ingresaste al menos una letra`);
  }

  seguir = confirm(`Desea continuar?`);
}