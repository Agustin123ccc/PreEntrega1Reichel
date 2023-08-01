let nombre = prompt("Bienvenido a nuestra pagina WEB! Aca podras comprar la casa de juguete ideal para tu niño/a. ¿Cual es su nombre?"); 
alert("Un gusto " + nombre + "! gracias por confiar en nosotros, a continuacion te preguntaremos la edad del niño.");
alert("¡Atencion, la ventas de las casas de juguetes estan disponibles para menores de maximo hasta 12 años de edad");

 let edad = prompt("Ingrese la edad del niño:");

 while(edad > 12){
    alert("Ups! ocurrio un problema... su hijo ya supera el limite de edad propuesto para comprar los juguetes.");
    edad = prompt("Ingrese la edad del niño:");
  }

  alert("¿Que tamaño de casa estas interesado comprar? te dejo los precios para que pienses y observes!..."); 
  alert ("Casa grande: 7000$ + decoracion 7500$");
  alert ("Casa mediana: 4000$ + decoracion 4500$");
  alert ("Casa pequeña: 1500$ + decoracion 2000$");
  alert ("Juguete $500");
function juguete(selector){
    switch (selector){
        case "1":
            return "Usted escogio la casa grande por 7500$ para su niño/a! gracias por su compra.";
        case "2":
            return "usted escogio la casa mediana por 4500$ para su niño/a! gracias por su compra.";
        case "3":
            return "usted escogio la casa pequeña por 2000$ para su niño/a! gracias por su compra.";
        case "4":
            return "Usted escogio el pack de juguetes por 500$ para su niño/a gracias por su compra.";
        default:
            return "Juguete no encontrado"
    }
}
let selector

let seguirComprando = true;

while (seguirComprando) {
    alert("¿Qué tal? ¡Ya estamos por finalizar tu compra! Selecciona el que más te interesó para tu niño/a.")
    let selector = prompt("Si estás interesado en elegir la casa más grande, coloca '1'. Si, en cambio, estás interesado en la casa mediana, coloca '2'. Si te interesa algo más pequeño, coloca '3'. Por último, si deseas comprar el pack de juguetes, coloca '4'.");
    alert(juguete(selector));

    let respuesta = prompt("¿Quiere volver a comprar? Responde 'sí' o 'no'");
    if (respuesta != "si") {
        break;
    }

}
