import "./aboutmeimage.css"

export default function Aboutmeimage() {
const imagePath = require('./rishab.jpg');
  return (
        <div className='imagewrapper'>
                <img className="aboutmeImg" src={imagePath}/>
        </div>
  )
}
