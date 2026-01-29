import React from 'react';
import ReactDOM from 'react-dom/client';
import Avatar from "./Avatar"

function App() {
  return (
    <>
      <Avatar src="./images/mrv.jpg" alt="Marvin the paranoid andriod" />
      <br />
      <Avatar>MV</Avatar>
      <br />
      <Avatar />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);