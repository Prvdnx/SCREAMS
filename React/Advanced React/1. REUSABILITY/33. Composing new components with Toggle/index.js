import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./components/Toggle/index"
import Menu from "./components/Menu/index"
import Star from "./components/Star"

function App() {

  const menu = ['Home', 'About', 'Contact', 'Blog']
      
  return (
    <>
      <Star />

      <br />

      <Menu>
        <Menu.Button>Menu</Menu.Button>
          <Menu.Dropdown>
            {menu.map(item => <Menu.Item key={item}>{item}</Menu.Item>)}
          </Menu.Dropdown>
      </Menu>

    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
