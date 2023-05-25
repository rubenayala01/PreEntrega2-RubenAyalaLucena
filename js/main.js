const productos = [
    { nombre: 'Harina', precio: 50 },
    { nombre: 'Cerveza', precio: 100 },
    { nombre: 'Galletitas', precio: 150 },
    { nombre: 'Leche', precio: 250 },
    { nombre: 'Gaseosa', precio: 350 },

];

let carrito = []

let seleccion = prompt('Hola desea compra un producto?');

while (seleccion != 'si' && seleccion != 'no') {
    alert('Porfavor, ingresa SI o NO')
    seleccion = prompt('Hola desea comprar un producto?')
}

if (seleccion == 'si') {
    alert('A Continuacion Nuestra Lista De Productos')
    let todoslosProductos = productos.map((productos) =>  productos.nombre  + '' +  productos.precio  + '' + '$');
    alert (todoslosProductos.join('---'))
} else if (seleccion != 'no') {
    alert ('Gracias por venir, hasta pronto!!');
}


while (seleccion != 'no') {
    let productos = prompt ('agrega un producto a tu carrito')
    let precio = [0]

    if (productos == 'Harina' || productos == 'Galletitas' || productos == 'Cerveza' || productos == 'Leche' || productos == 'Gaseosa') {
        
    switch (productos) {
        case 'Harina':
         precio = 50;
         break
        case 'Galletitas':
         precio = 100;
         break
        case 'Cerveza':
         precio = 150;
         break
         case 'Leche':
         precio = 250;
         break
         case 'Gaseosa':
         precio = 350;
         break

    }

    let unidades = parseInt (prompt ('Cuantas unidades quiere llevar?'))
    carrito.push ({productos,precio,unidades})
    console.log(carrito);
    } else {
        alert ('NO TENEMOS ESE PRODUCTO!!!')
    }
    
    seleccion = prompt ('Desea Seguir Comprando??')

    while (seleccion === 'no'){
        alert ('Gracias por la compra, Hasta pronto!')
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.productos}, unidades ${carritoFinal.unidades},
            total a pagar es de ${carritoFinal.unidades * carritoFinal.precio} `);
        })
        break;
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total del su compra es de: ${total}`);