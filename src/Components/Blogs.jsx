import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({handledBookmarks}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }
    ,[])
    
    return (
        <div className="w-2/3">
            <h1 className="text-2xl font-bold text-center mt-10">Blogs :{blogs.length}</h1>
          
          {
            blogs.map(blog=><Blog blog={blog} handledBookmarks={handledBookmarks} key={blog.id}></Blog>)
           }
         
        </div>
    );
};

export default Blogs;