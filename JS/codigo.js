class Placa {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const placaA = new Placa("rtx2060", 20000, 20);
const placaB = new Placa("rtx2080", 26000, 10);
const placaC = new Placa("rtx3070", 35000, 15);
const placaD = new Placa("rtx1650", 12000, 5);

let listaProductos = [placaA, placaB, placaC, placaD];

for (const producto of listaProductos) {

    if (producto.stock != 0) {

        let card = document.createElement("div");

        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <p><b>Precio:</b> $${producto.precio}</p>
                          <p>Unidades en stock: <b>${producto.stock}</b></p>`;
        document.body.append(card);
        card.style.color = "white";
    }
}

let nombreProductos = listaProductos.map((producto) => producto.nombre);

// let cantidad = parseInt(prompt("¡Bienvenido!, ingresá cuantos productos querés comprar:"));

let cantidad = 0;

function inputHandler(e){
    cantidad = e.target.value;

    compra()
}


let input = document.getElementById("cantidadCompra")

input.addEventListener("input", inputHandler)





while (isNaN(cantidad) || cantidad < 1) {
    alert("Entrada errónea, Por favor intentá de nuevo.")
    cantidad = parseInt(prompt("¡Bienvenido!, ingresá cuantos productos querés comprar:"));
}

let precioTotal = 0;

function calculoPrecio(cantidad, precio) {
    precioTotal += cantidad * precio;
}


function calculoStock(cantidad, producto) {
    if (producto.stock >= cantidad) {
        alert("El precio total es de: $" + (cantidad * producto.precio));
    }
    else {
        alert(`No disponemos de esa cantidad en stock. Nuestro stock actual es de: ${producto.stock} unidades`);
    }  
        
}

function compra(){

    for (let i = 0; i < cantidad; i++) {

        let pedido = "" 
        let pedidoEncontrado = {} 
        do {    
            pedido = prompt("Ingrese la placa que desea comprar: \n " + nombreProductos.join("\n ")).toLowerCase()
            console.log(pedido)
            pedidoEncontrado = listaProductos.filter(cadaProducto => cadaProducto.nombre === pedido)
            console.log(pedidoEncontrado)
            pedidoEncontrado = pedidoEncontrado[0]
        } while (!pedidoEncontrado) 
        let cantidadCompra = parseInt(prompt("¿Cuántas unidades querés?"));
        do{
            cantidadCompra = parseInt(prompt("¿Cuántas unidades querés?"));
            alert("Se espera una entrada númerica. Volvé a intentar.")

        }while(isNaN(cantidadCompra))

        calculoPrecio(cantidadCompra, pedidoEncontrado.precio);
    }

    if (cantidad >= 1) {
        alert("El precio final de su compra es de $: " + precioTotal);
    }
}

