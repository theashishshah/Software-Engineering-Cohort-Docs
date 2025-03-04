if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.


How does diffrently behave 'let' and 'const' keyword in the case of 'primitive data-type' and 'non-primitive data-type'?

## With primitive data-type:
    when we declare any variable using 'let' keyword, and try to reassign different value later on:
        basically our 'variable' which was holding primitive value, now points to different value(precisely memory address) but the previous value remain in memory and garabage collector cleans it.

```javascript
let name = "Ashish";  // The variable 'name' points to memory location 0x3fds3
name = "Ayush";       // Now, 'name' points to a different memory location, say 0x7abf34

// 1. Initially, the string "Ashish" is stored at memory location 0x3fds3.
// 2. The name variable now points to 0x3fds3.
// 3. When you reassign the value to "Ayush", the string "Ayush" is stored at a new memory location, say 0x7abf34.
// 4. The name variable now points to 0x7abf34 instead of 0x3fds3.

```
    when we declare any variable using 'const' keyword, and try to reassign different value later on:
        then in this case, initially the variable which was holding value(precisely memory location), this can't point to another location(meaning its memory address can't be changed),
        we're not talking about values
```js
const name = "Ashish";  // The variable 'name' points to memory location 0x3fds3
name = "Ayush";         // Error: Cannot reassign 'name'

// 1. The string "Ashish" is stored at memory location 0x3fds3.
// 2. The name variable points to 0x3fds3 initially.
// 3. Since name is declared with const, the reference stored in name cannot change. This means name will always point to 0x3fds3 and cannot be updated to point to a new memory location like 0x7abf34
```


## with non-primitive data-types:
same things happen with non-primitive data-types:
```js
let one = {
    fname: "Ashish",
    lname: "Shah"
}
console.log(one)
one = {
    firstName: "Abhay",
    lastName: "Shamra"
}
console.log(one)
```
the above code is let me reassign object because it is created using 'let' keyword and memory management goes same like primitive data-type but the actual data is stored in heap memory instead of stack. that means the variable which was pointing or holding refrence to heap memory location, now will hold refrence of another memory location cuz 'one' was re-assigned (not modified)

but in the case of const: 
```js
const one = {
    fname: "Ashish",
    lname: "Shah"
}
console.log(one)
one = {   //Error: assignment to constand variable
    firstName: "Abhay",
    lastName: "Shamra"
}

but one.fname = "Abhay" // this is fine, but object variable itself is immutable but its properties are mutuable
console.log(one)
```
it doesn't let you to re-assign another object but but it lets you to modify the properties of it.


[greates line ever](https://www.w3schools.com/js/js_const.asp#:~:text=It%20does%20not%20define%20a%20constant%20value.%20It%20defines%20a%20constant%20reference%20to%20a%20value.)

