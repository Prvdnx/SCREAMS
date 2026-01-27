import React from 'react';
import ReactDOM from 'react-dom/client';
import Marquee from "./Marquee"

function App() {
  return (
    <main>
      <Marquee>🧛‍♀️ Welcome to Horrorville 🧛‍♀️</Marquee>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);