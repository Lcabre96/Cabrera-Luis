class Placa {
    constructor(producto, precio, stock) {
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }  
}

const placaA = new Placa ("rtx2060", 20000, 20);
const placaB = new Placa ("rtx2080", 26000, 10);
const placaC = new Placa ("rtx3060", 35000, 15); 
const placaD = new Placa ("rtx1660", 12000, 5);


let listaProductos = [placaA, placaB, placaC, placaD];

let nombreProductos = listaProductos.map((placas) => placas.producto);

let productos = parseInt(prompt("¡Bienvenido!, ingresá cuantos productos quieres comprar:"));


while(isNaN(productos)){ //agregar condicion de si es menor a 1
    alert("No ingresaste un número, Por favor intentá de nuevo.")
    productos = parseInt(prompt("¡Bienvenido!, ingresá cuantos productos quieres comprar:"));
}

let precioTotal = 0;

function calculoPrecio(cantidad, precio) { //esta funcion con la de abajo se pueden juntar y hace una unica más sencilla
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
    //y si ingreso un producto que no existe?
    //porque si no existe me pregunta la cantidad?
    let cantidadCompra= parseInt(prompt("¿Cuántas unidades querés?"));
    

    if (compra1 == "rtx2060") { //uso incorrecto de condicionales
        calculoStock(cantidadCompra, placaA); //esto es igual
    }
    else if (compra1 == "rtx2080") {
        calculoStock(cantidadCompra, placaB); //a esto, solo que con otro producto
    }
    else if (compra1 == "rtx3060") {
        calculoStock(cantidadCompra, placaC); //ahora ya aprndimos a usar funciones de orden superior: usalas!
    }
    else if (compra1 == "rtx1660") {
        calculoStock(cantidadCompra, placaD);
    }
    else {
        alert("No tenemos ese producto");
    }
}

if (productos >= 1) {
    alert("El precio final de su compra es de $: " + precioTotal);
}
