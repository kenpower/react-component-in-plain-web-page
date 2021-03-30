# Using react component in vanilla web page


```
npm install --save-dev babelify @babel/core
npm install browserify --save-dev   

./node_modules/.bin/browserify demo.jsx --transform babelify --standalone util > ./demo.js
```