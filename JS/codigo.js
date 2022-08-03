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


let nombreProductos = listaProductos.map((producto) => producto.nombre);

let cantidad = parseInt(prompt("¡Bienvenido!, ingresá cuantos productos querés comprar:"));


while (isNaN(cantidad) || cantidad < 1) {
    alert("Entrada errónea, Por favor intentá de nuevo.")
    cantidad = parseInt(prompt("¡Bienvenido!, ingresá cuantos productos querés comprar:"));
}

let precioTotal = 0;

function calculoPrecio(cantidad, precio) {
    precioTotal += cantidad * precio;
}
// INTENTÉ JUNTAR AMBAS FUNCIONES, PERO SE ME ROMPE EL CÓDIGO Y NO SE DONDE ESTA EL PROBLEMA..
// LE QUISE PASAR POR PARAMETRO LA FUNCION, PERO NO ME SALE

//si no sale ahora: tranqui! el tema es que de alguna forma funcione!!!

function calculoStock(cantidad, producto) {
    if (producto.stock >= cantidad) {
        alert("El precio total es de: $" + (cantidad * producto.precio));
    }
    else {
        alert(`No disponemos de esa cantidad en stock. Nuestro stock actual es de: ${producto.stock} unidades`);
    }   // NO ME ENTRA A ESTE ELSE POR MAS QUE ME PASE DEL STOCK...
        
}

for (let i = 0; i < cantidad; i++) {

    let pedido = "" 
    let pedidoEncontrado = {} 
    do {    
        pedido = prompt("Ingrese la placa que desea comprar: \n " + nombreProductos.join("\n ")).toLowerCase()
        console.log(pedido)
        pedidoEncontrado = listaProductos.filter(cadaProducto => cadaProducto.nombre === pedido)
        console.log(pedidoEncontrado)
        pedidoEncontrado = pedidoEncontrado[0]
    } while (!pedidoEncontrado) // ESTA CORRECCION QUE ME HICISTE ACA, PORQUE ESTA EL SIGNO ESE DELANTE? 
    //el do-while: hace algo mientras ocurra algo
    //en este caso mientras NO EXISTA EL pedido encontrado, va a seguir preguntando
    let cantidadCompra = parseInt(prompt("¿Cuántas unidades querés?")); //y si no es un numero??? //aca deberias agregar algo
    calculoPrecio(cantidadCompra, pedidoEncontrado.precio);
    // ACA CUANDO PONGO TODOS LOS PRODUCTOS BIEN, ME TIRA ERROR DEL PEDIDOENCONTRADO.PRECIO....
    //te armé un par de funciones... pero tenian algunos bugs para ver si los solucionabas!
    //ahora te anda todo bien... PERO TODA LA INTERACCION (PEDIDOS DE DATOS) HAY QUE HACERLAS DESDE EL HTML!
}

if (cantidad >= 1) {
    alert("El precio final de su compra es de $: " + precioTotal);
}

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