import { useEffect, useState } from "react"

const UseEffectExample = ({ value }) => {

    const [text, setText] = useState(undefined)
    const [num, setNum] = useState(undefined)
    const [otroEstado, setOtroEstado] = useState(undefined)

    // useEffect(function, arrayDeDependencias)

    console.log("estoy fuera de useEffect");

    useEffect(() => {

        console.log("estoy en el useEffect sin un array de dependencias")

    })
    

    useEffect(() => {

        console.log("estoy en el useEffect con un array de dependencias vacío por lo tanto, UseEffectExample se ha montado")

        document.body.addEventListener('scroll', () => {})

        return () => {
            console.log('UseEffectExample se ha desmontado');

            document.body.removeEventListener('scroll', () => {})

            // Es un buen lugar para hacer los unregister de javascript
            // por ejemplo un addEventListener, un setTimeout, un setInterval
       }

    }, [])

    useEffect(() => {

        console.log("estoy en el useEffect con text en el array de dependencias")

    }, [text])

    useEffect(() => {

        console.log("estoy en el useEffect con num en el array de dependencias")

    }, [num])

    useEffect(() => {

        console.log("estoy en el useEffect con num y text en el array de dependencias")

    }, [num, text])

    const cambiarEstado = () => {
        setText("Hola mundo")
    }

    const generarRandom = () => {
        setNum(Math.random())
    }

    return (
        <div>
            <h1>Ejemplos de useEffect</h1>

            <p>{text}</p>
            
            <p>{num}</p>

            <button onClick={cambiarEstado}>Cambiar estado</button>
            <button onClick={generarRandom}>Generar número random</button>
        </div>
    )   

}

export default UseEffectExample