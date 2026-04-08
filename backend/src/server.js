const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const data = [
  {
    id: 1,
    slug: "react-co-ban",
    title: "React Cơ Bản",
    content: "Nội dung bài học React cơ bản...",
  },
  {
    id: 2,
    slug: "node-express",
    title: "Node & Express",
    content: "Cách tạo API với Express...",
  },
];

const user = [
  {
    id: 1,
    username: "admin",
    password: "123",
    role: "admin",
  },
  {
    id: 2,
    username: "user",
    password: "123",
    role: "user",
  }
]

app.get("/posts", (req, res) => {
    return res.json(data);
})

app.get("/posts/:slug", (req, res) => {
    const {slug} = req.params;
    const post = data.find((b) => b.slug === slug);
    if(!post){
        return res.status(404).json({ message: error});
    }

    return res.json(post);
})

app.get("/users", (req, res) => {
    return res.json(user);
})

app.post("/addpost", (req, res) => {
    const {slug, title, content} = req.body;
    const newPost = {
        id: data.length + 1,
        slug,
        title,
        content,
    }
    data.push(newPost);
    return res.status(201).json(newPost);
})

app.post("/signin", (req, res) => {
    const creds = {
    username: req.body.username,
    password: req.body.password,
  };
  if(creds.username === "hung" && creds.password === "123"){
    res.status(200).send({ message: "Đăng nhập thành công!" });
  }else{
    res.status(400).send({ message: "Đăng nhập thất bại!" });
  }
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
})

