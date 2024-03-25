import React, { useState } from 'react';
import "./can.css"
import C1 from './Chapters/c1';
import C2 from './Chapters/c2';
import C3 from './Chapters/c3';
import C4 from './Chapters/c4';


const Can = () => {
        const [items, setItems] = useState([
        { id: 1, title: 'Chapter 1', content:  <C1/>},
        { id: 2, title: 'Chapter 2', content:  <C2/> },
        { id: 3, title: 'Chapter 3', content:  <C3/> },
        { id: 4, title: 'Chapter 3', content:  <C4/> },
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
        <h1 className='maintitle'>If you think you can</h1>
        <img style={{width: '1050px', height:'700px'}} src="https://images.pexels.com/photos/819635/pexels-photo-819635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ></img>
        <ul className='listclass'>
        {items.map((item) => (
                <li className='listclass' key={item.id}>
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

export default Can;
