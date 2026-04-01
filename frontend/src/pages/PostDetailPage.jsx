import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"; // Lấy slug từ URL
import axios from "axios";

const PostDetailPage = () => {
    const {slug} = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const res = await axios.get(`http://localhost:8080/posts/${slug}`);
                setData(res.data);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [slug]);
    return (
        <div>
            {loading && <p>Đang tải...</p>}
            <h3>{data.title}</h3>
            <p>{data.content}</p>
        </div>
    )
}

export default PostDetailPage