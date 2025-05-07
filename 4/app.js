const sumarProductos = (precioUnitario,cantidadDeseada) => precioUnitario* cantidadDeseada


let precioUnitarioPrompt=prompt("Ingresar precio unitario")
let cantidadDeseadaPrompt=prompt("Ingresar cantidad deseada") 
alert(`Serian $${sumarProductos(precioUnitarioPrompt,cantidadDeseadaPrompt)}`)