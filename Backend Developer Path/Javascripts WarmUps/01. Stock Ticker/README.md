# Stock Ticker

A simple simulation of stock updates with price trend visualization.

## Implementation
- **Logic**: `index.js` fetches data every 1.5 seconds via `setInterval` from `fakeStockAPI.js`.
- **Rendering**: Updates DOM elements (`#name`, `#price`, etc.) with new data.
- **Trends**: Compares current price vs. previous:
  - 🟢 **Up**: Price > Previous
  - 🔴 **Down**: Price < Previous
  - ⚪ **Same**: Price == Previous

## How to Run
- Using **Python**:
  Run `python3 -m http.server` in the project directory. 
  Open the URL shown in the terminal (usually `http://localhost:8000`).


- Using **Vite**:
    ```
    npm install
    npm start or npx vite
    ```
  Open the URL shown in the terminal (usually `http://localhost:5173`). 
  Head over to https://vitejs.dev/ to learn more about configuring vite

