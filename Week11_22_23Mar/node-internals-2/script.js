process.env.UV_THREADPOOL_SIZE = 8;
console.log(process.env.UV_THREADPOOL_SIZE)
const fs = require('fs');
const crypto = require('crypto');
const { log } = require('console');

// increase or decrease worker pool

setTimeout(() => console.log('Set timeout function.'), 0);
setImmediate(() => console.log('Set immediate function'));

fs.readFile('test.txt', 'utf-8', function (err, data) {
    const start = Date.now();
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 1 hashed.`);
    });
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 2 hashed.`);
    });
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 3 hashed.`);
    });
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 4 hashed.`);
    });
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 5 hashed.`);
    });
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 6 hashed.`);
    });
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 7 hashed.`);
    });
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 8 hashed.`);
    });
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 9 hashed.`);
    });
    crypto.pbkdf2('Password', 'salt', 100000, 1024, 'sha512', (err, data) => {
        console.log(`${Date.now() - start}ms: password 10 hashed.`);
    });
});

console.log('Hello from console');
