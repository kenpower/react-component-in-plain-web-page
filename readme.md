# Using react component in vanilla web page

This example renders a material-ui TableContainer in a standalone web page.


```
npm install
```

If starting from scratch, you will need the following packages

```
npm install browserify babelify @babel/preset-react  @babel/preset-env  @material-ui/core --save-dev   
```

Following command converts the (node/react) `demo.jsx` to a browser runnable script.

```
./node_modules/.bin/browserify demo.jsx --transform babelify --standalone util > ./bin/demo.js
```