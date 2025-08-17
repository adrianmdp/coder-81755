import users from './mock.json'

const MapExample = () => {

    return (
        <>
            <div>
                <h1>Map Example</h1>
            </div>
            
            <table border={1}>
                <thead>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>DNI</th>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.email}</td>
                                <td>{user.telefono}</td>
                                <td>{user.dni}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>

    )

}

export default MapExample