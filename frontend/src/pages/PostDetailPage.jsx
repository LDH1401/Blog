import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PostDetailPage = () => {
    const {slug} = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [comment, setComment] = useState("");

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

    const handleAddComment = async () => {
        try{
            const res = await axios.post(`http://localhost:8080/posts/${slug}/comments`, { text: comment });
            setData((prevData) => ({
                ...prevData,
                comments: [...prevData.comments, res.data.data],
            }));
            setComment("");
        }catch(error){
            console.error("Error adding comment:", error);
        }
    }
    return (
        <div>
            {loading && <p>Đang tải...</p>}
            <h3>{data.title}</h3>
            <p>{data.content}</p>
            <hr/>
            <h4>Bình luận:</h4>
            {(data.comments || []).length > 0 && (
                <div>
                    <ul>
                        {data.comments.map((c, index) => (
                            <li key={index}>{c}</li>
                        ))}
                    </ul>
                </div>
            )}
            <input 
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Thêm bình luận</button>
            <br/>

            <button onClick={() => navigate(-1)}>Quay lại</button>
        </div>
    )
}

export default PostDetailPage