# Real Estate

A property listing application demonstrating ES6+ features.

## Implementation
- **Logic**: Filters and maps property data (`propertyForSaleArr`) to HTML cards.
- **Calculations**: Uses `.reduce()` to calculate total property size from `roomsM2`.
- **Features**: Utilizes object destructuring, default parameters, and template literals.
- **Fallback**: Renders `placeholderPropertyObj` if no property array is provided.

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