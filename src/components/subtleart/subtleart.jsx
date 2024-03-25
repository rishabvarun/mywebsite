import React, { useState } from 'react';
import "./subtleart.css"
import Sa1 from './Chapters/sa1';
import Sa2 from './Chapters/sa2';
import Sa3 from './Chapters/sa3';


const Subtleart = () => {
        const [items, setItems] = useState([
        { id: 1, title: 'Chapter 1', content:  <Sa1/>},
        { id: 2, title: 'Chapter 2', content:  <Sa2/> },
        { id: 3, title: 'Chapter 3', content:  <Sa3/> },

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
        <h1 className='maintitle'>The subtle art of not giving a fuck</h1>
        <img style={{width: '1050px', height:'700px'}} src="https://images.pexels.com/photos/3832254/pexels-photo-3832254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
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

export default Subtleart;
