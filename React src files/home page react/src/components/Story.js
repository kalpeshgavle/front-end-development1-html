import React from 'react';
import './css/Story.css';
// import img from 'https://wp.w3layouts.com/carservicing/wp-content/themes/Car-servicing/assets/images/about.jpg'

export default function Story() {
    return <>
        <div className="story">
            <div className="container">
                <div className="story-content d-flex py-5 my-5">
                    <div className="story-image w-50">
                        <img className="img-fluid border rounded-2" src="https://wp.w3layouts.com/carservicing/wp-content/themes/Car-servicing/assets/images/about.jpg" alt="" />
                    </div>
                    <div className="story-text w-50 ps-5 pe-2 py-2 pt-4">
                        <h1 className="">We value our clients and offer a personal, professional service.</h1>
                        <p className="py-2 pb-3 mb-3 mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum non velit, culpa!</p>
                        <button className="">Read Our Story</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}