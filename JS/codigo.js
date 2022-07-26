class Placas {
    constructor(producto, precio, stock) {
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }  
}

const placaA = new Placas ("RTX 2060", 20000, 20);
const placaB = new Placas ("RTX 2080", 26000, 10);
const placaC = new Placas ("RTX 3060", 35000, 15); 
const placaD = new Placas ("RTX 1660", 12000, 5);
const placaE = new Placas ("RTX 1080", 22000, 9); 

let listaProductos = [placaA, placaB, placaC, placaD, placaE];

let nombreProductos = [];

function listasProductos(){
    for(const producto of listaProductos){
        nombreProductos.push(producto.producto);
    }
}
listasProductos();


let productos = parseInt(prompt("Ingresá cuántos productos querés comprar: \n" + nombreProductos.join("\n")));
console.log(productos);

let precioTotal = 0;

function calculoPrecio(cantidad, precio) {
    precioTotal += cantidad * precio;
}

function calculoStock(cantidad, producto)  {
    if (producto.stock >= cantidad) {
        calculoPrecio(cantidad, producto.precio);
        alert("El precio total es de: $" +(cantidad * producto.precio));
    }
    else {
        alert("No tenemos esa cantidad en stock. Nuestro stock es de " + stock + " unidades.");
    }
}


for (let i = 0; i < productos; i++) {

    let compra1 = prompt("Ingresá la placa que querías comprar: \n" + nombreProductos.join("\n")).toLowerCase();
    let cantidadCompra = parseInt(prompt("Ingresá cuántas unidades querías comprar:"));

    if (compra1 == "rtx 2060") {
        calculoStock(cantidadCompra, placaA);
    }
    else if (compra1 == "rtx 2080") {
        calculoStock(cantidadCompra, placaB);
    }
    else if (compra1 == "rtx 3060") {
        calculoStock(cantidadCompra, placaC);
    }
    else if (compra1 == "rtx 1660") {
        calculoStock(cantidadCompra, placaD);
    }
    else if (compra1 == "rtx 1080") {
        calculoStock(cantidadCompra, placaE);
    }
    else {
        alert("No tenemos ese producto");
    }
}

if (productos > 1) {
    alert("El precio final de su compra es de $: " + precioTotal);
}







