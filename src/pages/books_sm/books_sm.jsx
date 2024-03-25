import "./books_sm.css"
import Sidebar from "../../components/sidebar/sidebar"
import Subconsciousmind from "../../components/subconsciousmind/subconsciousmind"

export default function Books_sm() {
  return (
    <div  className="books">
        <Subconsciousmind/>
        <Sidebar/>
    </div>
  )
}