import React from "react";
import ReactDOM from 'react-dom/cient';

function Greeting(){
  return <h2>MY First Component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)