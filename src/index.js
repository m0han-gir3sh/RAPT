import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AboutUs from './page/about';
import Nav from './page/nav';
import Footer from './page/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bgpic'>

    <Nav/>
    <br>
    </br>
    <br>
    </br>
    <br></br>
    <br></br> 
    <br></br>
    <AboutUs/>
    <Footer/>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
