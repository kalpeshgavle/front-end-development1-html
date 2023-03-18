import React from 'react';
import './css/Gallary.css';
import img5 from "./images/proimg2.jpg";
import img6 from "./images/proimg5.jpg";
import img7 from "./images/proimg4.jpg";
import img8 from "./images/proimg5.jpg";
export default function Gallary() {
    return <>
        <section className="gallary">
            <div className="proinfo">
                <div className="gallaryimg">
                    <img src={img5} alt=""></img>
                    <div className="imgHeading">
                        <h1>hello</h1>
                    </div>
                </div>
                <div className="gallaryimg">
                    <img src={img6} alt=""></img>
                    <div className="imgHeading">
                        <h1>hello</h1>
                    </div>
                </div>
                <div className="gallaryimg">
                    <img src={img7} alt=""></img>
                    <div className="imgHeading">
                        <h1>hello</h1>
                    </div>
                </div>
                <div className="gallaryimg">
                    <img src={img8} alt=""></img>
                    <div className="imgHeading">
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
}