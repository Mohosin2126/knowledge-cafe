import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks ,readingTime}) => {
   
    return (
        <div className="w-1/3 mx-auto">
                        <h1 className="text-2xl font-bold text-center  mt-5"> Reading Time: <span className="text-red-500">{readingTime} </span>minutes</h1>
            <h1 className="text-2xl font-bold text-center mt-5 " >Bookmarked Blog: <span className="text-red-500">{bookmarks.length}</span>

            </h1>
           <div className="mt-10">
           {
              bookmarks.map((bookmark,idx)=><Bookmark bookmark={bookmark} key={idx} readingTime={readingTime}></Bookmark>)  
            }
           </div>
        </div>
    ); 
};

export default Bookmarks;  