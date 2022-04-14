import LibraryList from "./LibraryList";

function Library(){
    return(
        <div className="library">
            <h1 className="libraryTitle ">LIBRARY</h1>
            <h2 className="librarySubtitle">Your games</h2>
            <LibraryList/>
        </div>
    );
}

export default Library;