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
Open with a local server (e.g., Live Server) to support ES6 modules.
