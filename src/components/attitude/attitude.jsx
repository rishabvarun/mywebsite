import React, { useState } from 'react';
import "./attitude.css"
import At1 from './Chapters/at1';
import At2 from './Chapters/at2';
import At3 from './Chapters/at3';


const Attitude = () => {
        const [items, setItems] = useState([
        { id: 1, title: 'Chapter 1', content:  <At1/>},
        { id: 2, title: 'Chapter 2', content:  <At2/> },
        { id: 3, title: 'Chapter 3', content:  <At3/> },

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
        <h1 className='maintitle'>Attitude is everything</h1>
        <img style={{width: '1050px', height:'700px'}} src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
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

export default Attitude;
