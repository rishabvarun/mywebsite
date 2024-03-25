import "./topbar.css"
import {Link} from "react-router-dom"
export default function TopBar() {
        return (
                <div className="top">
                        <div className="topLeft">
                        <a href= "https://rishabvar.medium.com/" target="_blank" rel="noopener noreferrer">
                        <i className="topIcon fa-brands fa-medium"></i>
                        </a>
                        <a href= "https://www.linkedin.com/in/rishabvar" target="_blank" rel="noopener noreferrer">
                        <i className="topIcon fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href= "https://github.com/rishabvarun" target="_blank" rel="noopener noreferrer">
                        <i className="topIcon fa-brands fa-github"></i>
                        </a>
                        </div>
                        <div className="topCenter">
                                <ul className="topList">
                                        <li className="topListItem">
                                        <Link to="/home" style={{textDecoration:"none", color:"inherit"}}>
                                                Home
                                        </Link>
                                        </li>
                                        <li className="topListItem">
                                        <Link to="/about" style={{textDecoration:"none", color:"inherit"}}>
                                                About
                                        </Link>     
                                        </li>
                                        <li className="topListItem">
                                        <Link to="/books" style={{textDecoration:"none", color:"inherit"}}>
                                                Books
                                        </Link>
                                        </li>
                                </ul>
                        </div>
                        <div className="topRight">
                                rishab/var/
                        </div>
                </div>
        )
}