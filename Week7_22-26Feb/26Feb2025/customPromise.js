/**
 * Promise Signature...
 *  Promise((resolve, reject) =>{
 *  kam kro, agar ho gya to resolve
 *  resolve()
 *  agar ni hua to
 *  reject()
 * })
 */

//TODO: add promise chaining support in this.
//TODO: make required things private
class MyPromise {
    constructor(executerFn) {
        this._state = 'pending';
        this._successCallbacks = [];
        this._errorCallbacks = [];
        this._finallyCallbacks = [];
        this.value = undefined;
        this.error = undefined;
        executerFn(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        );
    }
    then(cb) {
        if (this._state === 'fulfilled') {
            cb(this._value);
            return this;
        }
        this._successCallbacks.push(cb);
        return this;
    }
    catch(cb) {
        if (this._state === 'rejected') {
            cb(this._error);
            return this;
        }
        this._errorCallbacks.push(cb);
        return this;
    }
    finally(cb) {
        if(this._state !== "pending") cb()
        this._finallyCallbacks.push(cb);
        return this;
    }
    resolverFunction(value) {
        this._state = 'fulfilled';
        this._value = value;
        this._successCallbacks.forEach((cb) => cb(value));
        this._finallyCallbacks.forEach((cb) => cb());
    }
    rejectorFunction(err) {
        this._state = 'rejected';
        this._error = err;
        this._errorCallbacks.forEach((cb) => cb(err));
        this._finallyCallbacks.forEach((cb) => cb());
    }
}

function wait(seconds) {
    const cb = (resolve, reject) => {
        resolve('hahaha');
    };
    const p = new MyPromise(cb);
    return p;
}

const p = wait(1);
p.then((value) => console.log(`Promise resolved after 10 secs`, value))
    .catch((value) => console.log(`Promise rejected after 10 secs`, value))
    .finally(() => console.log(`Finnaly`));
