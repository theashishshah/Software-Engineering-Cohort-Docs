console.log("Age is ", age)
// above is TDZ: the area where variable is accessed before initialization is called Temporal dead zone
const age = 21;

// ReferenceError: age is not defined
// ReferenceError: Cannot access 'age' before initialization