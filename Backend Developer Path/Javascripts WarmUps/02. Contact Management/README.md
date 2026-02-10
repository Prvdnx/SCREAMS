# Contact Management

A simple contact search application using JavaScript and Regex.

## Implementation
- **Logic**: Filters `contactsArr` from `contactsData.js` based on user input.
- **Search**: Uses `RegExp` for case-insensitive partial matching on `contact.name`.
- **Rendering**: Dynamically creates `aside` contact cards with name, email, and phone.

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
