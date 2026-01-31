import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Toggle from "./components/Toggle/index"


// Use Toggle.Display to render the div and conditionally apply the 'filled' class based on on state
// Toggle.Display accepts a function as child, receiving on state to conditionally render JSX
// The div's className should include 'filled' when on is true, enabling transition between white
// and blue backgrounds as defined in style.css

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {/*(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>
            }*/
            (on) => <div className={`box ${on && 'filled'}`}></div> }
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  )
}
          // <Toggle.On>
          //   <div className="box filled"></div>
          // </Toggle.On>
          // <Toggle.Off>
          //   <div className="box"></div>
          // </Toggle.Off>
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
