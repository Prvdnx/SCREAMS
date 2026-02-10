# Library Software

A book collection management script demonstrating modern JavaScript features.

## Implementation
- **Default Values**: Uses logical OR (`||`) to handle missing or empty strings for `title` and `author`.
- **Nullish Coalescing**: Uses `??` for `yearPublished` to specifically handle `null` or `undefined` values.
- **Optional Chaining**: Uses `?.` to safely access nested properties in `libraryData`.
- **Short-circuit Evaluation**: Determines availability using `&&` and `||` operators.
- **Output**: Logs the final `collection` array to the consol.

## How to Run
Run the script using Node.js:
```
node index.js
```
The output will be displayed in your terminal.
