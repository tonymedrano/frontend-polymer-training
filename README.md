     |\   /|
      \|_|/
      /. .\
  --<=\_Y_/=-->
      {>o<}
 
 * Project: /Users/tonymedrano/Desktop/frontend-polymer-training
 * Created Date: Friday June 28 2019
 * Author: tonymedrano 
 
<img src="https://colaninfotech.com/wp-content/uploads/2019/01/Polymer_Banner.png" title="Polymer Technology" alt="Polymer Technology">

# frontend-polymer-training
Tips and tricks working with Polymer 2.0 WebComponents

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

## Javascript varibales declaration (used in example)

I use `let` when I need to reassign a variable and
`const` is a signal that the identifier won’t be reassigned.
`var` is now the weakest signal available when you define a variable in JavaScript.


## Javascript iterators (used in example)

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

> **Syntax:** const new_arr = arr.map(callback(currentValue[, index[, array]]) {
    // Return element for new_arr
}[, thisArg]);

// map function ieration
const arr2 = [1, 4, 9, 16];
// pass a function to map
const map1 = arr2.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

```javascript

// filter function iteration
filter() method creates a new array with all elements that pass the test implemented 
by the provided function.

> Syntax: const newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

---

<img src="https://i.pinimg.com/originals/dc/b9/30/dcb9303ed1fa81fe641e1e25ac644bb1.gif" title="Polymer Technology Ironman" alt="Polymer Technology Ironman">

## Javascript Custom Events (used in example)

Here you can dispatch DOM events. Such events are commonly called synthetic events.

```javascript

// Adding custom data and triggering – CustomEvent().
document.dispatchEvent(new CustomEvent('your-event-name', { detail: somedata }));

// Catch event with custom data – CustomEvent().
document.addEventListener('your-event-name', (event) => {
  // event.target matches elem
}, false);
```

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="http://tonymedrano.com" target="_blank">Tony Medrano</a>.