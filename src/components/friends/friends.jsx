import React, { useState } from 'react';
import "./friends.css"
import F1 from './Chapters/f1';
import F2 from './Chapters/f2';
import F3 from './Chapters/f3';
import F4 from './Chapters/f4';
import F5 from './Chapters/f5';
import F6 from './Chapters/f6';
import F7 from './Chapters/f7';
import F8 from './Chapters/f8';
import F9 from './Chapters/f9';
import F10 from './Chapters/f10';
import F11 from './Chapters/f11';
import F12 from './Chapters/f12';

const Friends = () => {
        const [items, setItems] = useState([
        { id: 1, title: 'Chapter 1', content:  <F1/>},
        { id: 2, title: 'Chapter 2', content:  <F2/> },
        { id: 3, title: 'Chapter 3', content:  <F3/> },
        { id: 4, title: 'Chapter 4', content:  <F4/> },
        { id: 5, title: 'Chapter 5', content:  <F5/> },
        { id: 6, title: 'Chapter 6', content:  <F6/> },
        { id: 7, title: 'Chapter 7', content:  <F7/> },
        { id: 8, title: 'Chapter 8', content:  <F8/> },
        { id: 9, title: 'Chapter 9', content:  <F9/> },
        { id: 10, title: 'Chapter 10', content:  <F10/> },
        { id: 11, title: 'Chapter 11', content:  <F11/> },
        { id: 12, title: 'Chapter 12', content:  <F12/> },
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
        <h1 className='maintitle'>How to win friends and influence people</h1>
        <img style={{width: '1050px', height:'700px'}} src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
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

export default Friends;
