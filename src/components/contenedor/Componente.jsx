import { useEffect, useState } from 'react'


function Componente() {
    const userInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martin",
        apellido: "san Jose"
    }
    const [user, setUser] = useState(userInicial);

    function tick() {
        setUser((userInicial) => {
            let edad = userInicial.edad + 1
            return {
                ...userInicial, 
                fecha: new Date(),
                edad
            }
            
        })
    } 
    
    useEffect(() => {
        const timerID = setInterval( () => tick(), 1000)
        return () => {
            clearInterval(timerID)
        };
    });
    return (
        <div>
            <h2>
                Hora Actual: { user.fecha.toLocaleString() }
            </h2>
            <h3>{ user.nombre } { user.apellido }</h3>
            <h1>Edad: { user.edad }</h1>
        </div>
    )
}

export default Componente