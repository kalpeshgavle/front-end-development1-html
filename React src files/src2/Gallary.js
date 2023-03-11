import React from 'react';
import './Gallary.css';
import img1 from './images/1.jpeg'
import img2 from './images/2.jpeg'
import img3 from './images/3.jpeg'
import img4 from './images/4.jpeg'

export default function Gallary() {

    return <>
        <div className="gallary">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img2} alt="" />
            <img src={img1} alt="" />
            <img src={img4} alt="" />
            <img src={img3} alt="" />
        </div>
    </>
}