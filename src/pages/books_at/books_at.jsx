import "./books_at.css"
import Sidebar from "../../components/sidebar/sidebar"
import Attitude from "../../components/attitude/attitude" 

export default function Books_attitude() {
  return (
    <div  className="books">
        <Attitude/>
        <Sidebar/>
    </div>
  )
}
