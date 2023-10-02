

const Bookmark = ({bookmark }) => {
    const {title}=bookmark
   
    return (
        <div className="bg-slate-200 p-4 m-4 ">
            <h1 className="font-semibold">{title}</h1>

        </div>
    );
};

export default Bookmark;