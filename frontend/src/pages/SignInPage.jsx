import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignInPage = ({onLogin}) => {
    const [formData, setFormData] = useState({username: "", password: ""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleLogin = async () => {
        try{
            const res = await axios.post("http://localhost:8080/api/auth/signin", formData);
            alert("Đăng nhập thành công!");
            onLogin(formData.username);
            navigate("/dashboard");
        }catch(error){
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    }

    return (
        <div>
            <h3>Vui lòng đăng nhập tài khoản!</h3>
            <label htmlFor="username">Tên đăng nhập: </label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            <br/>
            <label htmlFor="password">Mật khẩu: </label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            <br/>
            <button onClick={handleLogin}>Đăng nhập</button>
        </div>
    )
}

export default SignInPage