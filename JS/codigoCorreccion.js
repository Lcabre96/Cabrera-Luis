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

let cantidad = parseInt(prompt("¡Bienvenido!, ingresá cuantos productos quieres comprar:"));

while(isNaN(cantidad)){ //TAREA: agregar condicion de si es menor a 1
    alert("No ingresaste un número, Por favor intentá de nuevo.")
    cantidad = parseInt(prompt("¡Bienvenido!, ingresá cuantos productos quieres comprar:"));
}

let precioTotal = 0;

function calculoPrecio(cant, precio) { //TAREA: esta funcion con la de abajo se pueden juntar y hace una unica más sencilla
    precioTotal += cant * precio;
}

function calculoStock(cant, producto)  {
    if (producto.stock >= cant) {
        calculoPrecio(cant, producto.precio);
        alert("El precio total es de: $" +(cant * producto.precio));
    }
    else {
        alert("No tenemos esa cantidad en stock. Nuestro stock es de " + stock + " unidades.");
    }
}

for (let i = 0; i < cantidad; i++) {    
    let pedido = "" //va a alojar la entrada del usuario
    let pedidoEncontrado = {} //va a alojar el pedido encontrado
    do {
        pedido == prompt("Ingrese la placa que desea comprar: \n " + nombreProductos.join ("\n ")).toLowerCase() //pido la entrada
        console.log(pedido)
        pedidoEncontrado = listaProductos.filter(cadaProducto => cadaProducto.nombre.toLowerCase() === pedido) //filtro todos los que coincidan
        console.log(pedidoEncontrado)
        //te dejo los consoles para que veas los resultados
        //pedidoEncontrado es un array y yo solo quiero el primer y unico elemento entonces:
        pedidoEncontrado = pedidoEncontrado[0]
    } while (!pedido)
    //ahora que se que el producto existe
    let cantidadCompra= parseInt(prompt("¿Cuántas unidades querés?"));
    calculoStock(cantidadCompra, pedidoEncontrado.precio);
}

if (productos >= 1) {
    alert("El precio final de su compra es de $: " + precioTotal);
}
