import React from 'react'
import './css/Home.css'

export default function Home() {
    return <>
        <div className="home-section">
            <div className="container">
                <div className="Home">
                    <div className="home-info">
                        <h1 className="my-2 py-2">Professional Car Repair and Maintenance.</h1>
                        <p className="my-2 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi. Distinctio accusantium fugit odit? Fugit ipsam. Sed ac fringilla ex. Nam mauris velit, ac cursus quis, non leo.</p>
                        <button className="read-btn btn mt-5">Read More</button>
                    </div>
                    <div className="home-request border rounded-2">
                        <form>
                            <h3>Request a call back</h3>
                            <input type="text" placeholder="Your Name" className="form-control my-3 py-3 fs-6" required />
                            <input type="text" placeholder="Your Email" className="form-control my-3 py-3 fs-6" required />
                            <input type="text" placeholder="Contact Number" className="form-control my-3 py-3 fs-6" required />
                            <input type="submit" className="read-btn btn w-100" value="Send Request" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}