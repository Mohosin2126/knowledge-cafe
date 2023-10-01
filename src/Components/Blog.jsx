/* eslint-disable react/prop-types */



const Blog = ({blog}) => {
    const {id,cover,title,author,author_img,posted_date,reading_time}=blog
   
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Blog;