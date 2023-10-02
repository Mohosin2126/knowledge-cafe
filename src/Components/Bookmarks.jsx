import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks ,readingTime}) => {
   
    return (
        <div className="w-1/3">
                        <h1 className="text-2xl font-bold text-center mt-5"> Reading Time: <span className="text-red-500">{readingTime} </span>minutes</h1>
            <h1 className="text-2xl font-bold text-center mt-5 " >Bookmarked Blog: {bookmarks.length}

            </h1>
           <div className="mt-10">
           {
              bookmarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id} readingTime={readingTime}></Bookmark>)  
            }
           </div>
        </div>
    ); 
};

export default Bookmarks;  