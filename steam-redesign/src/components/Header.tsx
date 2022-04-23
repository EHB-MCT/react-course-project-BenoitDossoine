import {FaSteam,FaRegHeart} from "react-icons/fa";
import {IoCartOutline} from "react-icons/io5";

function Header(){
    return(
        <header className="header">
            <div className="header-section header-left">
                <div className="header-logo"><FaSteam/></div>
                <a href="">Store</a>
                <a href="">Library</a>
            </div>
            <div className="header-section header-right">
                <p>Welcome back, <span>Benoît</span></p>
                <div className="header-icon header-heart"><FaRegHeart/></div>
                <div className="header-icon header-cart"><IoCartOutline/></div>
            </div>
        </header>
    )
}

export default Header;