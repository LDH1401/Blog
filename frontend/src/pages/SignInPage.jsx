import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = ({onLogin}) => {
    const [formData, setFormData] = useState({name: "", pass: ""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleLogin = () => {
        if(formData.name === "admin" && formData.pass === "123"){
            navigate("/dashboard");
            onLogin(formData.name);
        }else{
            alert("MK sai")
        }
    }

    return (
        <div>
            <h3>Vui lòng đăng nhập tài khoản!</h3>
            <label htmlFor="name">Tên đăng nhập: </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            <br/>
            <label htmlFor="pass">Mật khẩu: </label>
            <input type="password" name="pass" value={formData.pass} onChange={handleChange}/>
            <br/>
            <button onClick={handleLogin}>Đăng nhập</button>
        </div>
    )
}

export default SignInPage