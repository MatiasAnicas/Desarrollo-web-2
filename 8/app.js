let nombreProductos=["Pan","Manteca","Papa","Manzana","Galletitas"]
for (productos of nombreProductos){
    let nuevoProducto= document.createElement("h2")
    nuevoProducto.innerHTML=`${productos}`
    document.body.appendChild(nuevoProducto)
}