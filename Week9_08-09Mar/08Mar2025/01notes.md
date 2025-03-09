## What is the difference between 'npm i or npm install' and 'npm init'
npm i does three things:
1. intall the mentioned dependencies from package.json file
2. install the fresh or new dependencies if there no exist that dependencies in package.json file
3. if we do npm i express without package.json file then it will create package.json file for us with bare minimun details.

npm init: it is used to initialize a fresh node application
ChatGPT: This command is used to create a new package.json file. It helps you set up a new Node.js project by interactively asking for details like your project’s name, version, description, entry point, and more. This file then becomes the blueprint for your project, allowing you to later install dependencies using npm install.

## How to intall a package: 
npm i express or npm install express

## how to remove a package:
npm uninstall express

## We use rm <file> to remove file or dir

## How to install older version of packages or specified version: 
npm i express@4.17.2


# Understanding Semantic Versioning (SemVer)
4.21.2

1st part -> 4
2nd part -> 21
3rd part -> 2

Semantic Versioning (SemVer) is a way to keep track of changes in your code and dependencies. It’s super helpful when you’re working with libraries or apps because it lets you know when things have changed and whether or not the changes will break your stuff. The version number is broken down into three parts: **Major**, **Minor**, and **Patch**. It looks something like this:

### 1. Patch Version (3rd Part)
The **patch version** is for small fixes, like fixing bugs or making minor tweaks. These changes don’t really affect how the app works. Think of it like fixing a typo or adjusting some text formatting. Here’s an example:

```js
// Version: 1.0.0
app.get("/", (req, res) => {
    log("Ashish Shah");
});

// After a patch update (fixing log message formatting)
app.get("/", (req, res) => {
    log("Hello, I'm Ashish Shah"); // Version: 1.0.1
});
```

### 2. Minor update (2nd Part)
2nd part: Recommended bug fix( security updates) or minor updates, that should be updated 
let's suppose you added a new route in your express application.
```js
     app.get("/", (req, res) => {
        log("Hello, I'm Ashish Shah"); 
    })

    app.put("/ashish", (req, res) =>{
        //database logic
        log("New entery is created") // now the version will be: 1.1.0
    })
```

### 3. Major update(1st part)
3rd part: Major update/release
It is major updates in terms of your application or package, in this may your entire application changed or re-written.
for example of my above application
```js
    app.GET("/", function (req, res) {
        // some secuirity related logic
        // other major logic that wasn't in the initial phase
    } )

    app.POST("/ashish", function (req, res){
        // data user edit logic
        // database changed
    })

    app.PUT("/shah", function (req, res){
        log("Hello Ashish shah")
    })
    // Now the version would be: 2.0.0
```

^4.21.2: 4.22.0, 4.32.9 ...    but < 5.0.0
^(caret symbol): install all recommended and minor bug fixes but not the major update
that means it won't update automatically when we update or do npm i express 
4.21.3
4.21.4
4.22.0
4.23.1
4.30.5
5.0.0  NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

and if we don't use caret symbol, then this version is locked that means:
4.21.2: it is fixed now, not any minor or recommended fixes will be updated.

~ (tilde operator or squiggly tilde)
~4.21.2: our major and minor updates will be remain same but patches will be updated
eg.
4.21.3
4.21.4
4.21.5
4.21.10
4.21.99
🚫 It will not update to 4.22.0 or any higher minor/major version.

we can use much more: latest, logical operation ~3.5.2 <  >=3.9.34 etc