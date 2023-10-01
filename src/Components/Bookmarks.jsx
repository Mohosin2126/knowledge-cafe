import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks}) => {
   
    return (
        <div className="w-1/3">
            <h1 className="text-2xl font-bold text-center mt-10">Bookmarked Blog: {bookmarks.length}

            </h1>
           <div className="mt-10">
           {
              bookmarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)  
            }
           </div>
        </div>
    );
};

export default Bookmarks;  