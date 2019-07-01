 * Project: /Users/tonymedrano/Desktop/frontend-polymer-training
 * Created Date: Monday July 1st 2019
 * Author: tonymedrano
 
<img src="https://avatars1.githubusercontent.com/u/4284691?v=3&s=200" title="FVCproductions" alt="FVCproductions">

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
