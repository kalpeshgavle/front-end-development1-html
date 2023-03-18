import React from "react";
import img4 from "./images/proimg4.jpg";

import "./css/Main.css";
export default function Main() {
    return <>
        <div className="container">
            <div className="image">
                <img
                    className="imgstart"
                    src={img4}
                    alt=""
                    height="400px"
                    width="500px"
                ></img>
            </div>
            <div className="info">
                <h1>
                    Perfect Jewellery <br />
                    For You
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
                    sit amet
                </p>
                <button>read more</button>
            </div>
        </div>

    </>
        ;
}