import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./components/Toggle/index"
import Menu from "./components/Menu/index"
import Star from "./components/Star"

function App() {
      //Composing new components with Toggle - Move other Toggle logic to be composed with the Menu components internally, so the person using our Menu component never needs to touch the generic Toggle at all.
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
