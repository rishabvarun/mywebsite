import React, { useState } from 'react';
import "./atomichabits.css"
import Ahc1 from './Chapters/ahc1';
import Ahc2 from './Chapters/ahc2';
import Ahc3 from './Chapters/ahc3'
import Ahc4 from './Chapters/ahc4';
import Ahc5 from './Chapters/ahc5';
import Ahc6 from './Chapters/ahc6';
import Ahc7 from './Chapters/ahc7';
import Ahc8 from './Chapters/ahc8';
import Ahc9 from './Chapters/ahc9';
import Ahc10 from './Chapters/ahc10';
import Ahc11 from './Chapters/ahc11';
import Ahc12 from './Chapters/ahc12';
import Ahc13 from './Chapters/ahc13';
import Ahc14 from './Chapters/ahc14';
import Ahc15 from './Chapters/ahc15';
import Ahc16 from './Chapters/ahc16';
import Ahc17 from './Chapters/ahc17';
import Ahc18 from './Chapters/ahc18';
import Ahc19 from './Chapters/ahc19';
import Ahc20 from './Chapters/ahc20';

const Atomichabits = () => {


        const [items, setItems] = useState([
        { id: 1, title: 'Chapter 1', content:  <Ahc1/>},
        { id: 2, title: 'Chapter 2', content:  <Ahc2/> },,
        { id: 3, title: 'Chapter 3', content:  <Ahc3/> },
        { id: 4, title: 'Chapter 4', content:  <Ahc4/> },
        { id: 5, title: 'Chapter 5', content:  <Ahc5/> },
        { id: 6, title: 'Chapter 6', content:  <Ahc6/> },
        { id: 7, title: 'Chapter 7', content:  <Ahc7/> },
        { id: 8, title: 'Chapter 8', content:  <Ahc8/> },
        { id: 9, title: 'Chapter 9', content:  <Ahc9/> },
        { id: 10, title: 'Chapter 10', content:  <Ahc10/> },
        { id: 11, title: 'Chapter 11', content:  <Ahc11/> },
        { id: 12, title: 'Chapter 12', content:  <Ahc12/> },
        { id: 13, title: 'Chapter 13', content:  <Ahc13/> },
        { id: 14, title: 'Chapter 14', content:  <Ahc14/> },
        { id: 15, title: 'Chapter 15', content:  <Ahc15/> },
        { id: 16, title: 'Chapter 16', content:  <Ahc16/> },
        { id: 17, title: 'Chapter 17', content:  <Ahc17/> },
        { id: 18, title: 'Chapter 18', content:  <Ahc18/> },
        { id: 19, title: 'Chapter 19', content:  <Ahc19/> },
        { id: 20, title: 'Chapter 20', content:  <Ahc20/> },
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
        <h1 className='maintitle'>Atomic habits</h1>
        <img className="image"  style={{width: '1050px', height:'700px'}} src='https://images.pexels.com/photos/6669359/pexels-photo-6669359.jpeg?auto=compress&cs=tinysrgb&w=1200'></img>
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

export default Atomichabits;
