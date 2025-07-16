// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id, title, author, themes = []) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.themes = themes;
}

Book.prototype.addTheme = function(newTheme) {
	this.themes = [...this.themes, newTheme];
}

const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
const book2 = new Book(2, "The Trial", "Franz Kafka");
book1.addTheme("Fantasy");
book2.addTheme("Corruption");
console.log(book1.themes);
console.log(book2.themes);



// function Book(id, title, author, themes = []) {
// 	// your code here
// 	this.id = id;
// 	this.title = title;
// 	this.author = author;
// 	this.themes = themes;
// }

// const book1 = new Book(1, "Harry Porter1", "Jk Rowlings");
// const book2 = new Book(2, "Harry-Porter2", "Jk-Rowlings")

// console.log(book1.title)
// console.log(book2.title)

// Book.prototype.addThemes = function(themes) {
// 	this.themes = [...this.themes, themes];
// }

// book1.addThemes("mystery")
// book2.addThemes("courage")

// console.log(book1.themes)
// console.log(book2.themes)