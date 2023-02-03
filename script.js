//VARIABLES

//variable asignada (let ó const) + nombreVarible + operador de asignacion +  contenido

alert ("Bienvenido a Zasa Arte")

//selecionar producto

let saludo = "Bienvenido a Zasa Arte"
console.log(saludo)

let tipoProducto = prompt("Que producto buscas?")
const anio = 2023

let tecnicaArtistica = prompt("Que tecnica artistica buscas?")

let nombreCuadro = prompt("Escriba el nombre del cuadro")

let producto = "El producto que esta buscando es:"
console.log(producto)

let nombreCompleto = `${tipoProducto} en ${tecnicaArtistica} ${nombreCuadro}`
console.log(nombreCompleto)

//CONDICIONAL

for (let i = 0; i < 5; i++){
    let nombreReserva = prompt("Decime tu nombre")
    alert(`La mesa Nro ${i}, está reservada a nombre de ${nombreReserva}`)
}  

