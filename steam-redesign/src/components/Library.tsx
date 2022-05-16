import LibraryList from "./LibraryList";
import Avatar from "./Avatar";

function Library(){
    return(
        <>
            <div className="library">
                <h1 className="libraryTitle ">LIBRARY</h1>
                <h2 className="librarySubtitle">Your games</h2>
                <LibraryList/>
            <div className="avatar">
                <Avatar></Avatar>
            </div>
            </div>
        </>
    );
}

export default Library;