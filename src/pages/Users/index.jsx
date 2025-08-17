import { useState, useEffect } from "react";

const Users = () => {

    // Necesitamos 2 estados de posts, uno que se mantenga con los datos originales
    // y otro que lo usamos para mostrar en pantalla con o sin filtro (postsToShow)
    const [posts, setPosts] = useState([])
    const [postsToShow, setPostsToShow] = useState([])
    const [comments, setComments] = useState([])

    const getPosts = async () => {

        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (resp.ok) {
            const data = await resp.json()
            setPosts(data) // Se esta actualizando el estado posts
        } else {
            // Acá podemos hacer algo en caso de que no tengamos éxito en la solicitud.
        }

    }

    const getComments = async (userId) => {

        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)

        if (resp.ok) {
            const data = await resp.json()
            setComments(data) // Se esta actualizando el estado comments
        } else {
            // Acá podemos hacer algo en caso de que no tengamos éxito en la solicitud.
        }

    }

    useEffect(() => {
        getPosts()
    }, [])

    // Agregué este useEffect para que postsToShow se actualice siempre que haya cambios en posts 
    // En nuestro código esto sólo pasa una vez pero podría darse en otros casos.
    useEffect(() => {
        setPostsToShow(posts)
    }, [posts])

    // Resuelvo la busqueda con expresión regular 
    // con la posibilidad de buscar por title, body
    // userId y id
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        const regex = new RegExp(searchTerm, 'i'); // 'i' ignora mayúsculas/minúsculas

        console.log(e.target.value);


        const filteredPosts = posts.filter(post =>
            regex.test(post.title) ||
            regex.test(post.body) ||
            regex.test(post.userId) ||
            regex.test(post.id));

        setPostsToShow(filteredPosts);
    };

    // && se tienen que cumplir todas las condiciones
    // || se tiene que cumplir al menos una condicion

    // if(cond1 && cond2 && cond3 && cond4)

    // if(cond1 || cond2 || cond3 || cond4)

    return (

        <>
            <h1>Pagina de usuarios</h1>

            <form action="">
                <label htmlFor="search">Buscar</label>
                <input type="text" name="search" id="search" onChange={handleSearch} />
                <span>Mostrando: {postsToShow.length} posts</span>
            </form>

            {postsToShow.map(post => {
                return (
                    <article key={post.title + post.id}>
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <ul>
                                <li>User: {post.userId}</li>
                                <li>Post Id: {post.id} </li>
                            </ul>
                        </div>
                        <button onClick={() => getComments(post.id)}>Ver comentarios</button>
                        {comments.length >= 1 &&
                            <table border={1}>
                                <tbody>
                                    {post.id === comments[0].postId && comments.map(comment => {
                                        return (
                                            <tr key={comment.id + comment.email}>
                                                <td>{comment.id}</td>
                                                <td>{comment.email}</td>
                                                <td>{comment.name}</td>
                                                <td>{comment.body}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        }
                        <hr />
                    </article>
                )
            })}
        </>

    )

}

export default Users