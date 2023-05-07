import React, {useState, useEffect} from 'react'

const Fetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(' https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => 
                    <li key={post.id}>{post.title}</li>
                    )
                }
            </ul>

        </div>
    )
}

export default Fetch;