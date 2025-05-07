let nombreProducto = "Empanada"
let precioUnitario = 500
let cantidadDeseada = prompt("Ingresar la cantidad deseada")

if (cantidadDeseada>=5){
    alert("Se va a aplicar el descuento del 10%")
    alert(`Vas a comprar ${cantidadDeseada} ${nombreProducto}s, serian $${(precioUnitario*cantidadDeseada)-((precioUnitario*cantidadDeseada)*10/100)} `)
}
else{
alert(`Vas a comprar ${cantidadDeseada} ${nombreProducto}s, serian $${precioUnitario*cantidadDeseada} `)
}