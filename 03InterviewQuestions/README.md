## What is starvation in JS?

-- when callback queue's task is perpetually delayed from the execution due to, other tasks from the micro task queue is continuously monopolizing the event loop.

```javascript
console.log("HI")
setTimeout(() => console.log("Hello 1 from time out 1 "), 0)
Promise.resolve().then(() => {
    console.log("1Promise resolve ho gya")
    Promise.resolve().then(() => {
        console.log("2Promise resolve ho gya")
        Promise.resolve().then(() => {
            console.log("3Promise resolve ho gya")
            Promise.resolve().then(() => console.log("4Promise resolve ho gya"))
            ...
        })
    })
})
// setTimeout(() => console.log("Hello 1 from time out 2"), -10000)
console.log("Bye")
```

## Write your own event loop. (Suppose there is a outdated browser in which event loop doesn't exist)

## Write your own promises. (lets say there is no promise in the JavaScript)

## while img, script, link tag are just HTML element, how can they request for the resources? src, href?

## Does var, let, const, function, function*, class are hoisted in JavaScript?

## What is temporal dead zone(TDZ) in javascript?
The temporal dead zone is not a syntactic location, but rather the time between the variable (scope) creation and the initialisation

## is this code snippet valid? if yes then why and if no then why no?
```javascript
const one;
one = 5;
```

## is let and const variable hoist?
-- yes they hoist but they can't be accessed due to TDZ. but in the case of "var" there is no TDZ