import axios from "axios";
import {useForm} from "react-hook-form";
const AddNewPostPage = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try{
            const res = await axios.post("http://localhost:8080/addpost", data);
            alert("Post added successfully!");
        }catch(error){
            console.error("Error adding post:", error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="slug">Slug</label>
                <input id="slug" {...register("slug", { required: true })} />
                {errors.slug && <span>Slug is required</span>}

                <br/>

                <label htmlFor="title">Title</label>
                <input id="title" {...register("title", { required: true })} />
                {errors.title && <span>Title is required</span>}

                <br/>

                <label htmlFor="content">Content</label>
                <textarea id="content" {...register("content", { required: true })} />
                {errors.content && <span>Content is required</span>}

                <br/>

                <button type="submit">Add Post</button>
            </form>

        </div>
    )
}

export default AddNewPostPage