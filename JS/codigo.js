/* class Placas {
    constructor(producto, precio, stock) {
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }  
}

const placaA = new Placas ("RTX 2060", 20000, 20);
const placaB = new Placas ("RTX 2080", 26000, 10);
const placaC = new Placas ("RTX 3060", 35000, 15); 
 */

let placaA = "Rtx 2060"
let placaB = "Rtx 2080"
let placaC = "Rtx 3060"

let precioA = 20000;
let precioB = 26000;
let precioC = 35000;

let stockA = 20;
let stockB = 10;
let stockC = 15;

let productos = parseInt(prompt("Ingresá cuántos productos queres comprar: \n- Rtx 2060\n- Rtx 2080\n- Rtx 3060"));

let precioTotal = 0;

function calculoPrecio(cantidad, precio) {
    precioTotal += cantidad * precio;
}

function calculoStock(cantidad, stock, precio) {
    if (stock >= cantidad) {
        calculoPrecio(cantidad, precio);
        alert("El precio total es de: $" +(cantidad * precio));
    }
    else {
        alert("No tenemos esa cantidad en stock. Nuestro stock es de " + stock + " unidades.");
    }
}

for (let i = 0; i < productos; i++) {

    let compra1 = prompt("Ingresá la placa que querías comprar: \n- Rtx 2060\n- Rtx 2080\n- Rtx 3060");
    let cantidadCompra = parseInt(prompt("Ingresá cuántas unidades querias comprar:"));

    if (compra1 == "Rtx 2060") {
        calculoStock(cantidadCompra, stockA, precioA);
    }
    else if (compra1 == "Rtx 2080") {
        calculoStock(cantidadCompra, stockB, precioB);
    }
    else if (compra1 == "Rtx 3060") {
        calculoStock(cantidadCompra, stockC, precioC);
    }
    else {
        alert("No tenemos ese producto");
    }
}

if (productos > 1) {
    alert("El precio final de su compra es de $: " + precioTotal);
}








