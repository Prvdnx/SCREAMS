import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector("#root"))
root.render(<p>Hello from the world of React!</p>)

// // Alternative // //
// import ReactDOM from "react-dom/client"

// ReactDOM.createRoot(document.querySelector("#root")).render(<p>Hello from the world of React!</p>)