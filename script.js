
//FUNCIÓN

function saludoGenerico() {
    alert("Bienvenido a Zasa Arte")
}

saludoGenerico()

let nombreUsuario = prompt("Decime tu nombre")

function saludoEspecifico(nombre) {
    
    alert(`Hola ${nombre}`)
}

//variable asignada (let ó const) + nombreVarible + operador de asignacion +  contenido
//selecionar producto

let tipoProducto = prompt("Que producto de arte busca?")
const anio = 2023

let producto = "El producto que esta buscando es:"
console.log(producto)

let nombreCompleto = `${tipoProducto}`
console.log(nombreCompleto)

//CONDICIONALES

let nombreProductos = parseInt(prompt("Escriba el numero de la tecnica que quiera elegir: 1)Tecnica Artistica, 2)Ilustración 3)Impresión"))
 while (isNaN(nombreProductos)) {
    alert("Ingreso un valor no númerico, por favor corrija")
    nombreProductos = parseInt(prompt("Escriba el numero de la tecnica que quiera elegir: 1)Tecnica Artistica, 2)Ilustración 3)Impresión"))
}

if (nombreProductos == 1) {
    alert("Ha elegido cuadro")
} else if(nombreProductos == 2){
    alert("Ha elegido Ilustración")
} else if(nombreProductos == 3){  
    alert("Ha elegido Impresión")
}

//CICLOS
//Se repite una determinada numero de veces
// i significa iterando, es decir que, hace que se repita un numero determinado de veces
//i++ es igualo que escribir  i = i + 1
//Por conteo - FOR

for (let i = 0; i < 2; i++){
    let dimensionesProducto = prompt("Escriba una dimensión, por ejemplo: 50 x 70 cm")
    alert(`el cuadro Nro ${i},sera de ${dimensionesProducto}`)
} 
alert("Su pedido quedo registrado") 


 //POR CONDICION - while

 let numerocelular = parseInt(prompt("Escribe tu numero de celular"))
while (isNaN(numerocelular)) {
    alert("Ingreso un valor no númerico, por favor corrija")
    numerocelular = parseInt(prompt("Escribe tu numero de celula"))
}
alert("Nos comunicaremos con usted")

//Is Not a Number -- Devuelve true cuando el valor analizado sea NaN

//FUNCIONES

