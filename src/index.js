import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './component/button/button';


const root = ReactDOM.createRoot(document.getElementById('root'));
//createElement converts your JSX in html
const element = React.createElement("div", {}, 
[React.createElement("h1", {class: "heading-danger"},"Color changing heading"), 
React.createElement("button", {}, "Change color")]
);
root.render(
  <div>
    <Button></Button>
  <React.StrictMode>
    {element}
  </React.StrictMode>
  </div>
  
);


