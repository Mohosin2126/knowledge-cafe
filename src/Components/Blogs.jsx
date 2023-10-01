import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }
    ,[])
    
    return (
        <div className="w-2/3">
            <h1 className="text-center text-2xl font-bold mt-6 ">Blogs :{blogs.length}</h1>
          
          {
            blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
           }
         
        </div>
    );
};

export default Blogs;