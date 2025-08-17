import user from '../components/MapExample/mock.json'

const myPromise = new Promise((resolve, reject) => {

    // Acá hago alguna operación
    // Y esto puede tener éxito o fallar

    if(Array.isArray(users) && users.lenght > 0) {
        // En caso de éxito voy a invocar
        resolve(user)
    } else {
        // En caso de falle voy a invocar
        reject("No se  pudieron cargar los usuarios")
    }
    
})