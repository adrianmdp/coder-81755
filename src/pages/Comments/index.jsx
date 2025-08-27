import { useParams } from "react-router-dom"

const Comments = () => {

    const params = useParams()

    return (
        <>
            <h1>Comments</h1>
            {params.postId}
        </>
    )

}

export default Comments