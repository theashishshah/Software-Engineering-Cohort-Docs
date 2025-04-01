why do we need error or status code?

- this is not good practice to handle error :

```javascript
try {
    // do something
} catch (error) {
    if (error === 'error message') {
        //do something
    } else {
        // do something
    }
}
```

[Error Code Stackoverflow](https://stackoverflow.com/questions/54784530/can-some-one-explain-what-are-the-error-codes-in-nodejs-not-status-codes)

instead we write like this:

```js
try {
    // Do something
} catch (error) {
    if (error.code == 'A_ERROR_CODE') {
        // do something
    } else {
        // do something
    }
}
```
[why error.code](https://nodejs.org/api/errors.html#class-error:~:text=The%20error.code%20property%20is%20a%20string%20label%20that%20identifies%20the%20kind%20of%20error.%20error.code%20is%20the%20most%20stable%20way%20to%20identify%20an%20error.)
[nodejs error.code](https://nodejs.org/api/errors.html#nodejs-error-codes)
