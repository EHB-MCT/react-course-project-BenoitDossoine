import {FaSteam} from "react-icons/fa";

function Header(){
    return(
        <header className="header">
            <div className="header-section header-left">
                <div className="header-logo"><FaSteam/></div>
                <a href="https://steamredesignangular.web.app/">Store</a>
                <a href="/">Library</a>
            </div>
            <div className="header-section header-right">
                <p>Welcome back, <span>Benoît</span></p>
            </div>
        </header>
    )
}

export default Header;