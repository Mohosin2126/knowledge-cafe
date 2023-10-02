

const Bookmark = ({bookmark }) => {
    const {title}=bookmark
   
    return (
        <div className="bg-slate-200 space-y-2 p-2 ">
            <h1 className="font-semibold">{title}</h1>

        </div>
    );
};

export default Bookmark;