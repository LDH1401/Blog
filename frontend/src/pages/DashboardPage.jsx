import axios from 'axios';
import { useEffect, useState } from 'react';
const DashboardPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
        const fetchData = async () => {
            try{
                setLoading(true);
                const res = await axios.get("http://localhost:8080/users");
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
            <h2>Dashboard</h2>
            <ul>
                {data.map((user) => (
                <li key={user.id}>
                    <h5>{user.username} - {user.role}</h5>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default DashboardPage