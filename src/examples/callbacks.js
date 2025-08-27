const shop = (callback) => {
    // 1 muestro un listado de productos con un map

    // 2 para cada proucto muestro un botón comprar

    // 3 Cuando se presiona, quiero que se realice
    //   la comra

    callback(5)


}

const funcion2 = () => {
    console.log(`Acá es donde se agrega el producto ${productId} al checkout`)
}

// Ejemplo 1
// Pasando como parametro una funciona nombrada (declarada anteriormente)
useEffect(() => {
    shop(funcion2)
}, [])

// Ejemplo 2
// Pasando como parametro una funciona anónima (no se declaró antes)
useEffect(() => {
    shop(productId => {
        console.log(`Acá es donde se agrega el producto ${productId} al checkout`)
    })
}, [])