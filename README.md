- Project: /Users/tonymedrano/Desktop/frontend-polymer-training
- Created Date: Friday June 28 2019
- Author: tonymedrano 👦🏽

---

<img src="https://cdn-images-1.medium.com/max/1600/1*5GBnqWJWD9-uIrEnTgGAGA.png" title="Polymer Technology" alt="Polymer Technology"  width="100%">

# frontend-polymer-training (used in examples)

👉🏽 Tips and tricks working with **Polymer 2.0** WebComponents and **Javascript ES6**.
All explained here is used in the current project example, so it will be easy to follow. 🤡 **Enjoy!**

## Installation

- All the `code` required to get started

### Clone

- Clone this repo to your local machine using `https://github.com/tonymedrano/frontend-polymer-training`

### Setup

> update and install this package first

```shell
$ yarn global add polymer-cli
# or...
$ npm install -g polymer-cli
$ npm install -g bower
$ bower install (dependecies)
$ polymer init (create and initial setting)
$ polymer serve (run local server)
$ polymer build (compile the project)
```

## Javascript varibales declaration

I use `let` when I need to reassign a variable and
`const` is a signal that the identifier won’t be reassigned.
`var` is now the weakest signal available when you define a variable in JavaScript.

👇🏽 **Polymer** recommends variable assigment like below:

```javascript
this.set('property', something); //. not this.property = something 😱
```
### Other property configuration object with several fields.
The **value** specifies the property's default value.

The **notify** property tells Polymer to dispatch property change events when the property value changes. 
This lets the change be observed by other nodes.

The **reflectToAttribute** property tells Polymer to update the corresponding attribute 
when the property changes.

```javascript
static get properties() {
      return {
        pressed: {
          type: Boolean,
          notify: true,
          reflectToAttribute: true,
          value: false
        },
        toggleIcon: {
          type: String
        },
      }
    }
```

## Javascript iterators

Iterator is a interface that specifies that an object/array object can be accessible
if it implements one of the following method:

```javascript
// forEach function iteration
forEach() method executes a provided function once for each array element.

> Syntax: arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

const arr = ['a', 'b', 'c'];

arr.forEach((element) => {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

```javascript

// map function iteration
map() method creates a new array with the results of calling a provided function
on every element in the calling array.

> Syntax: const new_arr = arr.map(callback(currentValue[, index[, array]]) {
    // Return element for new_arr
}[, thisArg]);

// map function iteration (remember, this return a transformed array).
const arr2 = [1, 4, 9, 16];
// pass a function to map
const map1 = arr2.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

```javascript

// filter function iteration (remember, this return a filtered array all matched objects).
filter() method creates a new array with all elements that pass the test implemented
by the provided function.

> Syntax: const newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

```javascript

// find function iteration (return the first matched element).
find() method returns the value of the first element in the array that satisfies
the provided testing function.

> Syntax: const findedObj = arr.find(callback(element[, index[, array]])[, thisArg])

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12
```

---

<img src="https://i.pinimg.com/originals/dc/b9/30/dcb9303ed1fa81fe641e1e25ac644bb1.gif" title="Polymer Technology Ironman" alt="Polymer Technology Ironman" width="100%">

## Javascript Custom Events

Here you can dispatch DOM events. Such events are commonly called synthetic events.

```javascript
// Adding custom data and triggering – CustomEvent().
document.dispatchEvent(
  new CustomEvent("your-event-name", { detail: somedata })
);

// Catch event with custom data – CustomEvent().
document.addEventListener(
  "your-event-name",
  event => {
    // event.target matches elem
  },
  false
);
```

## Javascript Template literals

```javascript
// Old fashion style.
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."

// New fashion style (Are enclosed by the back-tick ` `).
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

## Javascript JSON.parse() and JSON.stringify()

The **JSON object**, available in all modern browsers, has two very useful methods to deal with JSON-formatted content:

**JSON.parse()** method parses a JSON string, constructing the JavaScript value or object described by the string.
**JSON.stringify()** method converts a JavaScript object or value to a JSON string.

```javascript
let json = '{"result":true, "count":42}';
obj = JSON.parse(json);
console.log(obj.count);
// expected output: 42
console.log(obj.result);
// expected output: true

console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"
console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)])
);
// expected output: "[3,"false",false]"
```

---

<img src="https://cdn3.whatculture.com/images/2014/02/Iron-Man.jpg" title="Polymer Technology Ironman" alt="Polymer Technology Ironman" width="100%">

## Javascript HTTP and Ajax

**Fetch and XMLHttpRequest** - javascript provides two generic definitions of Request
and Response objects (and other things involved with network requests).

The **fetch()** method takes one mandatory argument, the path to the resource you want to fetch.

```javascript
fetch("http://your-url.com/endpoint")
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    console.log(JSON.stringify(myJson));
  });

// The second is an object of options including mehtod (GET, POST, PATCH, DELETE),
credentials, headers, body.
const url = "http://your-url.com/endpoint/profile";
const data = { username: "example" };

fetch(url, {
  method: "POST", // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: {
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(response => console.log("Success:", JSON.stringify(response)))
.catch(error => console.error("Error:", error));
```

**XMLHttpRequest (XHR)** objects to interact with servers. You can retrieve data from a URL
without having to do a full page refresh.

```javascript
// GET example
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    document.querySelector("your-element-selector-or-id").innerHTML =
      xhttp.responseText;
  }
};
xhttp.open("GET", "filename", true);
xhttp.send();

// POST example
const http = new XMLHttpRequest();
const url = "http://your-url.com/endpoint/";
const params = "lorem=ipsum&name=tonymedrano";
http.open("POST", url, true); // Or DELETE, PATCH, etc.

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = () => {
  //Call a function when the state changes.
  if (http.readyState == 4 && http.status == 200) {
    alert(http.responseText);
  }
};

http.send(params);
```

---

<img src="https://rkuykendall.github.io/wheretostartreading/articles/iron-man.jpg" title="Polymer Technology Ironman" alt="Polymer Technology Ironman" width="100%">


## Polymer webcomponent structure

**Custom element lifecycle**
The custom element spec provides a set of callbacks called "custom element reactions" 
that allow you to run user code in response to certain lifecycle changes.

**constructor**: Called when the element is upgraded (that is, when an element is created, 
or when a previously-created element becomes defined).

**connectedCallback**: Called when the element is added to a document.

**disconnectedCallback**: Called when the element is removed from a document.

**attributeChangedCallback**: Called when any of the element's attributes are changed, 
appended, removed, or replaced, For each reaction, the first line of your implementation 
must be a call to the superclass constructor or reaction. 

For the constructor, this is simply the **super()** call.

```javascript
constructor() {
  super();
  // …
}
```

For other reactions, call the superclass method. 
This is required so Polymer can hook into the element's lifecycle.

```javascript
connectedCallback() {
  super.connectedCallback();
  // …
}
```
<img src="http://www.tonymedrano.com/webcomponent.png" title="Polymer Technology Webcomponent" alt="Polymer Technology Webcomponent" width="100%">

**Observers** are methods invoked when observable changes occur to the element's data.

**Simple observer** for a property.
```javascript
// ...
static get properties() {
    return {
      active: {
        type: Boolean,
        // Observer method identified by name
        observer: '_activeChanged'
      }
    }
  }

  // Observer method defined as a class method
  _activeChanged(newValue, oldValue) {
    this.toggleClass('highlight', newValue);
  }
  // ...
```
**Complex observers** are declared in the observers array for more than one property to check.
Here you can use or create a function that observes and notifies props changes.

```javascript
static get observers() {
  return [
    // Observer method name, followed by a list of dependencies, in parenthesis
    'userListChanged(users.*, filter)'
  ]
}
```
---

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="http://tonymedrano.com" target="_blank">Tony Medrano</a>.
