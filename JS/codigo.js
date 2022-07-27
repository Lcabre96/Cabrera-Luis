class Placas { //convienen nombres en singular ya que cada vez que se usa: es un contructor "de una unidad"
    constructor(producto, precio, stock) {
        this.producto = producto;
        this.precio = precio;
        this.stock = stock;
    }  
}

const placaA = new Placas ("RTX 2060", 20000, 20); //aca creas una
const placaB = new Placas ("RTX 2080", 26000, 10); //aca otra
const placaC = new Placas ("RTX 3060", 35000, 15);  //etc
const placaD = new Placas ("RTX 1660", 12000, 5); //NO TE LA COMPLIQUES CON LOS NOMBRES (Y EN LO POSIBLE SIN ESPACIOS)
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
//SI TIENE QUE INGRESAR UN NUMERO: NO MOSTRARIA TODOS LOS PRODUCTOS, ES UNA RARA UX
//DARIA UN MENSAJE DE BIENVENIDA Y PREGUNTARIA LA CANTIDAD NOMAS
//QUE SUCEDE SI NO ES UN NUMERO???
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
    //ARMÁ EL CONDICIONAL NECESARIO PARA QUE:
    //SI NO EXISTE EL PRODUCTO: no me pregunte las unidades que quiero comprar

    if (compra1 == "rtx 2060") { //ESTO
        calculoStock(cantidadCompra, placaA);
    }
    else if (compra1 == "rtx 2080") { //ES CASI IGUAL A ESTO
        calculoStock(cantidadCompra, placaB);
    }
    else if (compra1 == "rtx 3060") { //Y ASI...
        calculoStock(cantidadCompra, placaC);
    }
    else if (compra1 == "rtx 1660") { //QUE USAMOS PARA NO REPETIR CODIGO MUUUY PARECIDO??? 
        calculoStock(cantidadCompra, placaD);
    }
    else if (compra1 == "rtx 1080") { //por otro lado: que pasa si el usuario escribe rTx 1080 o RTX 1080 o rtX1080??
        //por eso los nombres deben ser sencillos
        //y ademas deben usarse los metodos de comparacion adecuados como toLowerCase()
        calculoStock(cantidadCompra, placaE);
    }
    else {
        alert("No tenemos ese producto");
    }
}

if (productos > 1) { //y si es 1??? porque si compro un solo producto no me dice el total???
    alert("El precio final de su compra es de $: " + precioTotal);
}







