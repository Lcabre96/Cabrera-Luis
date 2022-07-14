
let peliculaA = "Batman";
let peliculaB = "Buzz";
let peliculaC = "Toystory";

let precioEntradaA = 800;
let precioEntradaB = 400;
let precioEntradaC = 600;

let stockEntradas = 5;

let entradas = prompt("Ingresá cuantas entradas quieres:");
let precioTotal = 0;

for (let i = 0; i <= entradas; i++) {

    let entradasCine = prompt("Por favor ingresa la película que quieres ver: \n-Batman \n-Buzz \n-Toystory");


    if (entradasCine == "Batman") {

        if (entradas < stockEntradas) {
            precioTotal += entradas * precioEntradaA;
            break;
        }
    
        else if (stockEntradas >= entradas) {
            precioTotal += entradas * precioEntradaA;
            alert("El precio total de las entradas es de: $" + (entradas * precioEntradaA));
        }
        else {
            alert("Nos quedamos sin entradas, disponemos de: " + stockEntradas + " entradas.");
            break;
        }
    }


    if (entradasCine == "Buzz") {

        if (entradas <= stockEntradas) {
            precioTotal += entradas * precioEntradaB;
            break;
        }

        else if (stockEntradas >= entradas) {
            precioTotal += entradas * precioEntradaB;
            alert("El precio total de las entradas es de: $" + (entradas * precioEntradaB));
        }
        else {
            alert("Nos quedamos sin entradas, disponemos de: " + stockEntradas + " entradas.");
            break;
        }
    }

    if (entradasCine == "Toystory") {

        if (entradas <= stockEntradas) {
            precioTotal += entradas * precioEntradaC;
            break;
        }

        else if (stockEntradas >= entradas) {
            precioTotal += entradas * precioEntradaC;
            alert("El precio total de las entradas es de: $" + (entradas * precioEntradaC));
        }
        else{
            alert("Nos quedamos sin entradas, disponemos de: " + stockEntradas + " entradas.");
            break;
        }
    }
    if (entradasCine != "Batman" && entradasCine != "Buzz" && entradasCine != "Toystory") {
        alert("No tenemos esa película en cartelera.")
        break;
    }
}

if (entradas >= 1 && entradas <5) {
    alert("total de su compra: $" + (precioTotal));
}












