import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Toggle from "./components/Toggle/index"

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <div className="box filled"></div>
          </Toggle.On>
          <Toggle.Off>
            <div className="box"></div>
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </>
  )
}

// The CSS transition in the "box" class is not applied because when toggled,
// one of the div is completely removed and replace by the other.

      // <Star />
      
      // <br />

      // <Menu>
      //   <Menu.Button>Menu</Menu.Button>
      //   <Menu.Dropdown>
      //     <Menu.Item>Home</Menu.Item>
      //     <Menu.Item>About</Menu.Item>
      //     <Menu.Item>Contact</Menu.Item>
      //     <Menu.Item>Blog</Menu.Item>
      //   </Menu.Dropdown>
      // </Menu>

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
