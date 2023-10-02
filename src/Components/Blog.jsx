



const Blog = ({blog,handledBookmarks,handledReadingTime}) => {
    const {id,cover,title,author,author_img,posted_date,reading_time,hashtags}=blog
   
    return (
        <div className=" w-[320px]  bg-base-100 lg:w-[600px] p-2 m-2 bg-base-100 shadow-xl mt-10  border-2 rounded  space-y-4 rounded-md " >
            <img className="w-[600px]" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex  justify-center items-center gap-2">
     <div>
     <img className="h-12" src={author_img} alt="" />
       
     </div>
               <div>
       <p className="text-2xl font-semibold">{author}</p>
       <p className="text-lg ">{posted_date}</p>
               </div>
                </div>
                <div className="flex justify-center items-center gap-5">
<p className="text-xl font-semibold text-rose-600">{reading_time} min read </p>
<img onClick={()=>handledBookmarks(blog)} className="bg-slate-200"  src="https://i.ibb.co/3083XPy/Frame.png" alt="" />
                </div>
            </div>
            <p className="text-4xl font-semibold ">{title}</p>
            <p>
                {
                   hashtags.map((hash,idx)=> <span className="gap-5"  key={idx}><a href="">#{hash}</a></span> )
                }
            </p>
            <button onClick={()=>handledReadingTime(reading_time ,id)}><p className="text-red-500 ">mark as read</p></button>
        </div>
    );
};


export default Blog;