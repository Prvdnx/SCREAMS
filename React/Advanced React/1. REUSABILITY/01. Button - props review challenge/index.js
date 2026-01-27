import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button"

function App() {
  return (
    <main>
      <Button text="Click Here"/>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
