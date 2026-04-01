import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const PostListPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
        const fetchData = async () => {
            try{
                setLoading(true);
                const res = await axios.get("http://localhost:8080/posts");
                setData(res.data)
            } catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            <ul>
                {data.map((post) => (
                <li key={post.id}>
                    <Link to={`/posts/${post.slug}`}>
                    <h5>{post.title}</h5>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default PostListPage