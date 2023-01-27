# async-callback-promise-wrapper
## Wraps any method that takes a callback to return a promise

[//]:<[![Build Status](https://travis-ci.org/nrsrivastava/async-callback-promise-wrapper.svg?branch=main)](https://travis-ci.org/nrsrivastava/asynac-callback-promise-wrapper)>
***
async-callback-promise-wrapper is a swift wrapper that will wrap around your favourite function that requires a callback, and will return a method that returns a promise.

## Installation
***
[//]:<Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.>

##### Package Manger
Using npm:

```bash
npm i async-callback-promise-wrapper
```
## Documentation
****
##### Cjs Module

```js
const MethodWrapper = require('async-callback-promise-wrapper')
```
##### Usage
Referring the method to be wrapped called as **exampleMethod**

```js
const wrappedMethod = MethodWrapper(exampleMethod);
```
or
```js
const wrappedMethod = MethodWrapper(exampleMethod,{...options});
```
##### Options
**The method to be wrapped takes the ```input``` arguments _first_ and then the ```callback```**
```js
exampleMethod(input1,input2,...,callback)
```
then leave ```paramsOrder``` as undefined or provide ```paramsOrder:true``` in options
```js
options = { ...otherOptions, paramsOrder:true}
```
**The method to be wrapped takes the ```callback``` _first_ and then the ```input``` arguments**
```js
exampleMethod(callback, input1, input2)
```
then provide ```paramsOrder:false``` in options
```js
options = { ...otherOptions, paramsOrder:false}
```
**The callback is required to take the ```result``` as _first argument_ and the ```error``` as _second argument_**
```js
callback(res, err)
```
then leave ```callbackParamsOrder``` as undefined or provide ```callbackParamsOrder:true``` in options
```js
options = {...otherOptions, callbackParamsOrder:true}
```
**The callback is required to take the ```error``` as _first argument_ and the ```result``` as _second argument_**
```js
callback(err, res)
```
then provide ```callbackParamsOrder:false``` in options
```js
options = {...otherOptions, callbackParamsOrder:false}
```
**The callback is required to take _only_ the ```result```. The method to be wrapped _throws_ any ```errors``` directly.**
```js
callback(res);
```
```js
exampleMethod(input1, input2, callback) throws Error
```
then leave ```callbackParamsOrder``` as undefined or provide ```callbackParamsOrder:true``` in options
```js
options = {...otherOptions, callbackParamsOrder:true}
```
## Supports
***
- commonjs
- node.js

## Development
***
Want to contribute? Great!

async-callback-promise-wrapper is build using the latest technologies
- [Typescript]
- [Jest]
- [Babel]


Open your favorite Terminal and run these commands.

_Install Dependencies_
```bash
npm install
```
_Run Tests_
```bash
npm run test
```
_Build_
```sh
npm run build
```

Distribution files are present in the ```build``` folder.

## License
***
MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Typescript]: <https://www.typescriptlang.org/>
   [Jest]: <https://jestjs.io/>
   [Babel]: <https://babeljs.io/>
