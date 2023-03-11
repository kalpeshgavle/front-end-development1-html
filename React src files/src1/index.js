import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import ClassComponent from './Class_Component'
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header />

);
const img = ReactDOM.createRoot(document.getElementById('img'));
img.render(
  <div classname="text-align-center">
    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt="img1" height="350px" width="350px" />
    <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="img1" height="350px" width="350px" />
    <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="img1" height="350px" width="350px" />
    <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpghttps://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpghttps://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg" alt="img1" height="350px" width="350px" />
  </div>
);
const root_1 = ReactDOM.createRoot(document.getElementById('root_1'));
root_1.render(
  <ClassComponent />
);

const Footer_1 = ReactDOM.createRoot(document.getElementById('Footer'));
Footer_1.render(
  <Footer />
);