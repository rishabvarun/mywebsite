import "./books_friends.css"
import Sidebar from "../../components/sidebar/sidebar"
import Friends from "../../components/friends/friends" 

export default function Books_friends() {
  return (
    <div  className="books">
        <Friends/>
        <Sidebar/>
    </div>
  )
}
