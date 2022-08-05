class Placa {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock; //AGREGAR FOTO Y DETALLE COMO UN HTML!!!
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
                          <p>Unidades en stock: <b>${producto.stock}</b></p>`; //ESA CARD DEBERIA SER IGUAL A LA QUE YA TENES EN EL HTML
        document.body.append(card);
        card.style.color = "white";
    }
}

//ES DECIR DEBERIAS RENDERIZAR TODO ESTO DINAMICAMENTE PARA CADA PRODUCTO QUE DEFINISTE
{/* <div class="col">
<div class="color-fondo card align-items-center">
    <img src=".././images/rtx3070.png" class="card-img-top" alt="RTX3070" data-aos="fade-right"
        data-aos-delay="300" />
    <div class="card-body">
        <h5 class="card-title text-center"><span>RTX </span>3070</h5>
        <p class="card-text text-center">La Nvidia GeForce RTX 3070 es una tarjeta gráfica de escritorio
            rápida basada en la arquitectura Ampere. Utiliza el gran chip GA104 y ofrece 5888 núcleos y 8 GB
            de memoria gráfica GDDR6. El rendimiento en juegos y la resolución 4k está ligeramente por
            debajo de una RTX 2080 Ti pero claramente más rápido que la antigua RTX 2080 Super.</p>
        <div id="containerBotonCartas">
            <button id="boton-cartas">COMPRAR</button>
        </div>


    </div>
</div>
</div> */}



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

