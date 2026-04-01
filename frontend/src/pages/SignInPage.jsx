
const SignInPage = ({onLogin}) => {
    const [formData, setFormData] = useState({name: "", pass: ""});

    const handleChange = (e) => {
        setFormData((prev))
    }

    return (
        <div>
            <h3>Vui lòng đăng nhập tài khoản!</h3>
            <label htmlFor="user">Tên đăng nhập: </label>
            <input type="text" name="user" value={formData.name} onChange={handleChange}/>
            <br/>
            <label htmlFor="pass">Mật khẩu: </label>
            <input type="password" name="pass" value={formData.pass} onChange={handleChange}/>
            <br/>
            <button onClick>Đăng nhập</button>
        </div>
    )
}

export default SignInPage    