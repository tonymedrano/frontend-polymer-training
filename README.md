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

## Javascript (used in example)

I use `let` when I need to reassign a variable and
`const` is a signal that the identifier won’t be reassigned.
`var` is now the weakest signal available when you define a variable in JavaScript.

```javascript
// forEach function ieration
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

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="http://tonymedrano.com" target="_blank">Tony Medrano</a>.