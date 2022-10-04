import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("mouseOver")
const helpText = "Help text!"
const elements = (<div className="name"> <h1>{helpText}</h1>
 <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
<p>{helpText == "Help text!" ? "YES" : "NO"}</p> </div>)
ReactDOM.render(elements, document.getElementById("app"))
