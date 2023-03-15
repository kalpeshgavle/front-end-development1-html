import React from 'react';
import './css/Header.css'

export default function Header() {
    return <>
        <div className="header">
            <div className="head-flex container ">
                <div className="left-logo">
                    <a href='#/index.html' >
                        <span className="fa-solid fa-car" ></span>
                        <span className="logo-text">Car Servicing</span>
                    </a>
                </div>
                <div className="right-menu">
                    <a href="#/">Home</a>
                    <a href="#/">About</a>
                    <a href="#/">Pages</a>
                    <a href="#/">Services</a>
                    <button className="fa-solid fa-magnifying-glass btn bordered-rounded "></button>
                    <button className="btn border btn-lg bordered-3 border-danger contact-btn">Contact Us</button>
                    <button className="fa-solid fa-moon btn"></button>
                </div >
            </div >
        </div >
    </>
}