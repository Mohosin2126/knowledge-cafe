/* eslint-disable react/prop-types */



const Blog = ({blog}) => {
    const {id,cover,title,author,author_img,posted_date,reading_time,hashtags}=blog
   
    return (
        <div className="bg-base-100 w-[600px] bg-base-100 shadow-xl mt-10 p-2 border-2 rounded   ">
            <img className="w-[600px]" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex  justify-center items-center gap-2">
     <div>
     <img className="h-12" src={author_img} alt="" />
       
     </div>
               <div>
       <p className="text-2xl">{author}</p>
       <p>{posted_date}</p>
               </div>
                </div>
                <div className="flex justify-center items-center gap-5">
<p>{reading_time} min read </p>
<img src="https://i.ibb.co/3083XPy/Frame.png" alt="" />
                </div>
            </div>
            <p className="text-4xl font-semibold ">{title}</p>
            <p>
                {
                   hashtags.map((hash,idx)=> <span className="gap-5"  key={idx}><a href="">#{hash}</a></span> )
                }
            </p>
        </div>
    );
};

export default Blog;