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

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
})

