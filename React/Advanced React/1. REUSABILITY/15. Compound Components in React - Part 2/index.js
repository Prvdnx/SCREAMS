import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"

function App() {
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]} />
    </Menu>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);