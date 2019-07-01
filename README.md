 * Project: /Users/tonymedrano/Desktop/frontend-polymer-training
 * Created Date: Monday July 1st 2019
 * Author: tonymedrano
 
<img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjulcGWnZPjAhWSb1AKHZ3sDt4QjRx6BAgBEAU&url=https%3A%2F%2Fcolaninfotech.com%2Fpolymer-js-development%2F&psig=AOvVaw3LHKbqeV8qY-P7X_AZDO-R&ust=1562053572253686" title="Polymer Technology" alt="Polymer Technology">

# frontend-polymer-training
Tips and tricks working with Polymer 2.0 WebComponents

> update and install this package first

```shell
$ yarn global add polymer-cli
# or... 
$ npm install -g polymer-cli
$ npm install -g bower
$ bower install (dependecies)
$ polymer init (create)
$ polymer serve (run local server)
$ polymer build (compile the project)
```

## Javascript (Optional)

I use `let` when I need to reassign a variable and
`const` is a signal that the identifier won’t be reassigned.
`var` is now the weakest signal available when you define a variable in JavaScript.

```javascript
// code away!

let generateProject = project => {
  let code = [];
  for (let js = 0; js < project.length; js++) {
    code.push(js);
  }
};
```

---
