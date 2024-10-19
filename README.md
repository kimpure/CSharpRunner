# runCSharp (rc)

## use
```js
const rc = require('./index.js');

(async () => {
    const result = await rc.runCSharp('return "hello, world";');

    console.log(result);
})()
```

## use by
edge-js <br>
js-yaml <br>
