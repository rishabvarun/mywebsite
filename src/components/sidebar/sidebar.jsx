import "./sidebar.css"
import {Link} from "react-router-dom"

export default function Sidebar() {
  return (
    
    <div className="sidebar">
        <div className="sidebarItem">
        <ul className="sidebarList">
                <li className="sidebarItemlist"><Link to="/books/atomichabits" style={{textDecoration:"none", color:"inherit"}}>Atomic habits</Link></li>
                <li className="sidebarItemlist"><Link to="/books/thepowerofyoursubconsciousmind" style={{textDecoration:"none", color:"inherit"}}>The power of your subconscious mind</Link></li>
                <li className="sidebarItemlist"><Link to="/books/howtowinfriendsandinfluencepeople" style={{textDecoration:"none", color:"inherit"}}>How to win friends and influence people</Link></li>
                <li className="sidebarItemlist"><Link to="/books/thesubtleartofnotgivingafuck" style={{textDecoration:"none", color:"inherit"}}>The subtle art of not giving a fuck</Link></li>
                <li className="sidebarItemlist"><Link to="/books/ifyouthinkyoucan" style={{textDecoration:"none", color:"inherit"}}>If you think you can</Link></li>
                <li className="sidebarItemlist"><Link to="/books/attitudeiseverything" style={{textDecoration:"none", color:"inherit"}}>Attitude is everything</Link></li>
        </ul>
        </div>
    </div>

  )
}
