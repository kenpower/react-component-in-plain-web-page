# Using react component in vanilla web page

This example renders a material-ui TableContainer in a standalone web page.


```
npm install
```

If starting from scratch, you will need the following packages

```
npm install browserify babelify @babel/preset-react  @babel/preset-env  @material-ui/core --save-dev   
```

and these Babel presets
```
{
    "presets": [
      ["@babel/preset-react", {
        "runtime": "automatic"
      }],
      "@babel/preset-env"
    ]
  }
```

Following converts the (node/react) `demo.jsx` to a browser runnable script. (transpile step)

```
./node_modules/.bin/browserify demo.jsx --transform babelify --standalone dashboard > ./bin/demo.js
```

Serve the page locally: `python localhost.py`

Solution inspired by this [Stackoverflow answer](https://stackoverflow.com/a/59559861/488802)