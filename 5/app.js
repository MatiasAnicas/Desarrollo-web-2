console.log("-------------------------------")
let productos= ["Galletitas","Pan","Cereales","Cafe","Coca","Agua"]
console.log(productos)
for (producto in productos){
    console.log(`producto N${producto}°: ${productos[producto]}`)
}

console.log("-----Se actualizo el stock-----")
productos.pop()
console.log(productos)
for (producto in productos){
    console.log(`producto N${producto}°: ${productos[producto]}`)
}