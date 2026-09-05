// DOM IN JAVASCRIPT

// When a web browser loads an HTML document, it parses the HTML source code and creates a tree-like 
// structure known as the Document Object Model (DOM). This DOM tree represents the structure of the 
// HTML document, with each HTML element being a node in the tree.

// This entire DOM tree is then accessible to JavaScript as an object. JavaScript can interact with this 
// object to manipulate the content, structure, and style of the document dynamically. The DOM essentially 
// serves as an interface between the HTML document and JavaScript, providing a way for scripts to access 
// and modify the document's structure and content.

// todo The Document Object Model (DOM) is an Application Programming Interface (API). The DOM Tree is the 
// structure of your HTML document, as represented by the DOM API. As stated, this API then gives us many 
// methods and properties that we can use to manipulate the Tree, and therefore, by extension, the document.

// Here is a types of nodes in js:
// Element node:  An HTML tag, the tree building blocks.
// Text node:  In the DOM tree, text content, including new lines, spaces, and tabs, is treated as text nodes.
// Attribute node: An attribute of an element.
// Comment node: Represent comments within the HTML document.
// Processing instruction node:  A processing instruction node, such as <? xml-stylesheet … ?>.
// Document node:  A document node.
// Document type node: A document type node, such as <! DOCTYPE html>.

// ==============================
// DOM Properties and Methods
// ==============================
// DOM Properties:
// document
// getElementById(id)
// getElementsByClassName(className)
// getElementsByTagName(tagName)
// querySelector(selector)
// querySelectorAll(selector)
// innerHTML
// textContent
// style

//! DOM Methods:
// createElement(tagName)
// appendChild(node)
// removeChild(node)
// addEventListener(event, function)
// removeEventListener(event, function)
// setAttribute(name, value)
// getAttribute(name)
// parentNode / parentElement
// childNodes / children
// firstChild / firstElementChild
// lastChild / lastElementChild
// nextSibling / nextElementSibling
// previousSibling / previousElementSibling
// closest(selector)
// forEach (Array.from)

// ==============================
// DOM Navigation
// ==============================

// document represents the entire document
// console.log(document);

// Document.documentElement returns the Element that is the root element of the document 
// (for example, the <html> element for HTML documents).
// console.log(document.documentElement);

// parentNode / parentElement:
// Navigate to the parent node or element.
// console.log(document.body.parentNode);
// console.log(document.body.parentElement);

// Document and DocumentFragment nodes can never have a parent, so parentNode will always return null. 
// It also returns null if the node has just been created and is not yet attached to the tree.
// console.log(document.parentNode);
// let div = document.createElement('div');
// let attach = document.body.appendChild(div)
// console.log(div.parentNode);

// childNodes / children:
// Navigate to child nodes or elements.
// console.log(document.body.childNodes);
// Give HTMLCollection children
// console.log(document.body.children);

// childNodes is a property that returns a NodeList containing all child nodes of a given element, 
// including text nodes and comment nodes.

// firstChild / firstElementChild:
// Navigate to the first child node or element.
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// todo The Element suffix in firstElementChild and similar properties signifies that only 
// element nodes are considered.

// lastChild / lastElementChild:
// Navigate to the last child node or element.
// let child = document.body.lastChild;
// let child = document.body.lastElementChild;
// console.log(child);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// nextSibling / nextElementSibling:
// Navigate to the next sibling node or element.
// console.log(document.head.nextSibling);
// console.log(document.head.nextElementSibling);


// previousSibling / previousElementSibling:
// Navigate to the previous sibling node or element.
// console.log(document.body.previousSibling);
// console.log(document.body.previousElementSibling);


// closest(selector):
// Find the closest ancestor of the current element that matches a given selector.

//* ==============================
//* DOM Filtering
//* ==============================

//? childNodes / children:
// Get a NodeList or HTMLCollection and filter based on your criteria.

//? Filtering Siblings:
//? nextSibling / nextElementSibling
//? previousSibling / previousElementSibling

//? closest(selector):
//? Find the closest ancestor that matches a given selector.
//? The closest(selector) method is used to find the closest ancestor of an element that matches a specified CSS selector. This method traverses up the DOM tree, starting from the current element, and returns the first ancestor that matches the provided selector. If no matching ancestor is found, it returns null.

// ==============================
// DOM Searching
// ==============================
// getElementById(id): Find an element by its ID.
// console.log(document.getElementById('heading'));
// console.log(document.getElementById('#heading')); ❌

// getElementsByClassName(className): Find elements with a specific class name.
// console.log(document.getElementsByClassName('best'));
// for readable
// console.log(...document.getElementsByClassName('best'));

// let get = document.getElementsByClassName('best');
// for (let v of get) {
//     console.log(v);
// }

// getElementsByTagName(tagName): Find elements with a specific tag name.
// console.log(document.getElementsByTagName('h2'));

// querySelector(selector): Find the first element that matches the specified CSS selector.
// console.log(document.querySelector('h2'));

// querySelectorAll(selector): Find all elements that match the specified CSS selector.
// console.log(document.querySelectorAll('p'));

// ============================================
// DOM - CRUD (Create, Read, Update, Delete):
// ============================================

//? createElement(tagName): Create a new HTML element.

//? appendChild(node): Append a node as the last child of a parent node.

//? removeChild(node): Remove a child node from its parent.

//? addEventListener(event, function): Create an event listener to handle events.

//? removeEventListener(event, function): Remove an event listener.

//? setAttribute(name, value): Set the value of an attribute on an element.

//? getAttribute(name): Get the value of a specific attribute on an element.

//? innerHTML: Read or update the HTML content of an element.

//? textContent: Read or update the text content of an element.

//* =============================
//* DOM - Iteration
//* =============================

//? Iteration:
//? forEach (Array.from): Iterate through NodeList or convert to an array for more flexible manipulation.

// Very important
// When you use the browser's developer tools console to select an element and change
// its text content using JavaScript, you are directly manipulating the DOM object in memory.
// Since the DOM is a live representation of the document, any changes you make to the DOM
// objects are immediately reflected in the rendered web page.

// However, these changes are typically temporary and exist only in the current session.
// When you refresh the page or navigate away, the browser reloads the original HTML
// document from the server, and the DOM is reconstructed during the parsing process.
// Any modifications made to the DOM objects during the previous session are lost, and
// the page reverts to its original state.