import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/index.css';
import reportWebVitals from './reportWebVitals';
import WinesList from './Components/Api_wines.tsx';
import Tendance from './Components/Tendance.tsx';
import Footer from './Components/Footer.tsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Ingrid+Darling&display=swap" rel="stylesheet"></link>
    <WinesList/>
    <Tendance/>
    <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
