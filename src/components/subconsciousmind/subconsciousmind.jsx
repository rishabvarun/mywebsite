import React, { useState } from 'react';
import "./subconsciousmind.css"
import Sm1 from './Chapters/sm1';
import Sm2 from './Chapters/sm2';
import Sm3 from './Chapters/sm3';
import Sm4 from './Chapters/sm4';
import Sm5 from './Chapters/sm5';
import Sm6 from './Chapters/sm6';
import Sm7 from './Chapters/sm7';
import Sm8 from './Chapters/sm8';
import Sm9 from './Chapters/sm9';
import Sm10 from './Chapters/sm10';
import Sm11 from './Chapters/sm11';
import Sm12 from './Chapters/sm12';


const Subconsciousmind = () => {


        const [items, setItems] = useState([
        { id: 1, title: 'Chapter 1', content:  <Sm1/>},
        { id: 2, title: 'Chapter 2', content:  <Sm2/> },
        { id: 3, title: 'Chapter 3', content:  <Sm3/> },
        { id: 4, title: 'Chapter 4', content:  <Sm4/> },
        { id: 5, title: 'Chapter 5', content:  <Sm5/> },
        { id: 6, title: 'Chapter 6', content:  <Sm6/> },
        { id: 7, title: 'Chapter 7', content:  <Sm7/> },
        { id: 8, title: 'Chapter 8', content:  <Sm8/> },
        { id: 9, title: 'Chapter 9', content:  <Sm9/> },
        { id: 10, title: 'Chapter 10', content:  <Sm10/> },
        { id: 11, title: 'Chapter 11', content:  <Sm11/> },
        { id: 12, title: 'Chapter 12', content:  <Sm12/> },
        ]);

        const toggleItem = (id) => {
        setItems((prevItems) =>
        prevItems.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
        )
        );
        };

        return (
        <div className='bookinfo'>
        <h1 className='maintitle'>The power of your subconscious mind</h1>
        <img style={{width: '1050px', height:'700px'}} src="https://images.pexels.com/photos/8378736/pexels-photo-8378736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
        <ul className='listclass'>
        {items.map((item) => (
                <li key={item.id} className='listclass'>
                <div className='chapter'>
                {item.isOpen ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-right"></i>}
                <h2 className="togglelist" onClick={() => toggleItem(item.id)}>
                {item.title} 
                </h2>
                </div>
                {item.isOpen && <p>{item.content}</p>}
                </li>
        ))}
        </ul>
        </div>
  );
};

export default Subconsciousmind;
