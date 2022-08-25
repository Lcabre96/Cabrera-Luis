/* class Placa {
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

 */


document.addEventListener('DOMContentLoaded', () => {

    const Clickbutton = document.querySelectorAll('.button');
    const tbody = document.querySelector('.tbody');
   


    let carrito = []


    Clickbutton.forEach(btn => {
        btn.addEventListener('click', addToCarritoItem)
    })


    function addToCarritoItem(e) {
        const button = e.target
        const item = button.closest('.card');
        const itemTitle = item.querySelector('.card-title').textContent;
        const itemPrice = item.querySelector('.precio').textContent;
        const itemImg = item.querySelector('.card-img-top').src;

        const newItem = {
            title: itemTitle,
            precio: itemPrice,
            img: itemImg,
            cantidad: 1
        }

        addItemCarrito(newItem);
    }


    function addItemCarrito(newItem) {

        const alert = document.querySelector('.alert');

        setTimeout(function () {
            alert.classList.add('hide');
        }, 1000)
        alert.classList.remove('hide');

        const InputElemnto = tbody.getElementsByClassName('input-elemento');
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].title.trim() === newItem.title.trim()) {
                carrito[i].cantidad++;
                const inputValue = InputElemnto[i]
                inputValue.value++;
                CarritoTotal()
                return null;
            }
        }

        carrito.push(newItem);

        renderCarrito()
    }


    function renderCarrito() {
        tbody.innerHTML = ''
        carrito.map(item => {
            const tr = document.createElement('tr');
            tr.classList.add('ItemCarrito');
            const Content = `
        
        <th scope="row">1</th>
                <td class="table-productos">
                  <img src=${item.img}  alt="">
                  <h6 class="title">${item.title}</h6>
                </td>
                <td class="table-price"><p>${item.precio}</p></td>
                <td class="table-cantidad">
                  <input type="number" min="1" value=${item.cantidad} class="input-elemento">
                  <button class="delete btn btn-danger">x</button>
                </td>
        
        `
            tr.innerHTML = Content;
            tbody.append(tr);

            tr.querySelector(".delete").addEventListener('click', removerItemCarrito);
            tr.querySelector(".input-elemento").addEventListener('change', sumaCantidad);
        })
        CarritoTotal()
    }

    function CarritoTotal() {
        let Total = 0;
        const itemCartTotal = document.querySelector('.itemCartTotal');
        carrito.forEach((item) => {
            const precio = Number(item.precio.replace("$", ''));
            Total = Total + precio * item.cantidad
        })

        itemCartTotal.innerHTML = `Total $${Total}`
        addLocalStorage()
    }

    function removerItemCarrito(e) {
        const buttonDelete = e.target
        const tr = buttonDelete.closest(".ItemCarrito");
        const title = tr.querySelector('.title').textContent;
        for (let i = 0; i < carrito.length; i++) {

            if (carrito[i].title.trim() === title.trim()) {
                carrito.splice(i, 1)
            }
        }

        const alert = document.querySelector('.remove');

        setTimeout(function () {
            alert.classList.add('remove');
        }, 1000);
        alert.classList.remove('remove');

        tr.remove()
        CarritoTotal()
    }

    function sumaCantidad(e) {
        const sumaInput = e.target
        const tr = sumaInput.closest(".ItemCarrito");
        const title = tr.querySelector('.title').textContent;
        carrito.forEach(item => {
            if (item.title.trim() === title) {
                sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;//IMPLEMENTACIÓN DE OPERADOR AVANZADO
                item.cantidad = sumaInput.value;
                CarritoTotal()
            }
        })
    }


    const botonComprar = document.querySelector('#boton-comprar');
    botonComprar.addEventListener('click', compraTodo);
    // SE AGREGA API AL BOTÓN DE COMPRAR..
    function compraTodo() {
        carrito.length == 0 ? (
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Parece que el carrito está vacío, ¡Agregá productos!',
            })
        )  
           : (fetch("https://ricardofort.herokuapp.com/all")
            .then((resp) => resp.json())
            .then((data) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Compra realizada con éxito',
                    text: `¡Gracias por tu compra! : ¡${data.frases[4]}!`,
                    showConfirmButton: false,
                    timer: 3500
                })
                carrito.length = 0
                renderCarrito();
                localStorage.removeItem('carrito');
            })
        )
    }


    
    const botonVaciar = document.querySelector('#boton-vaciar');
    botonVaciar.addEventListener('click', vaciarCarrito);

    function vaciarCarrito() {
        carrito.length == 0 ? (
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Parece que el carrito está vacío, ¡Agregá productos!',
            }))
        : Swal.fire({
            icon: 'question',
            title: '¿Estás seguro de vaciar el carrito?',
            showDenyButton: true,
            confirmButtonText: 'Vaciar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('¡Carrito vaciado!', '', 'success');
                // Limpiamos los productos guardados
              carrito = [];
                // Renderizamos los cambios
              renderCarrito();
                // Borra LocalStorage
              localStorage.removeItem('carrito');
            } 
          })
    };



    function addLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
       
    }

    window.onload = function () {
        const storage = JSON.parse(localStorage.getItem('carrito'));
        console.log(storage);
        console.log(JSON.stringify(storage));
        if (storage) {
            Toastify({
                text: '¡Tenés productos en el carrito!',
                className: 'info',
                gravity: 'top',
                position: 'right'
            }).showToast(); 
            carrito = storage;
            renderCarrito()
            
        }
    }
});

