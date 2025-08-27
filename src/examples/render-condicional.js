// Esto es solo a modo de ejemplo. Un useEffect no se
// puede utilizar fuera de un componente.

// && se tienen que cumplir todas las condiciones
// || se tiene que cumplir al menos una condicion

// if(cond1 && cond2 && cond3 && cond4)

// if(cond1 || cond2 || cond3 || cond4)

const name = undefined
const num = 123
const email = "asd@asd.com"
const phone = null
const otroDato = undefined

// false, undefined, null, 0, NaN, unknow, "" --> falsy

useEffect(() => {
    console.log(name && "Adrian" && num && email && phone); // null?

    console.log(otroDato || phone || name || num || email)


    if (name && "Adrian" && num && email && phone) {
        console.log('entra en if');

    } else {
        console.log('entra en else');

    }
}, [])


return (
    <>
        <br />
        Hola {name || (
            <span>
                Visitante <a href="http://mistio.com/login">Iniciar sesión</a>
            </span>
        )}
        {persona.email && persona.email.main && (
            <>
                <br />
                Email 1: {persona.email.main}
                <br />
                Email 2: {persona.email.secondary}
            </>
        )}
    </>
)