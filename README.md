# advanceJsConcepts
## Topics covered
1. Foundation 
    * Javascript Engine
        * ECMAScript engines
            * i.e Chrome V8
    * Javascript Runtime
    * Interpreter/ Compiler/ JIT Compiler
    * Writing Optimized code
    * Call Stack + Memory Heap
    * Garbage Collection 
    * Node.js
    * Single Threaded Mode


## Examples 
#### Inside the engine
```javascript 
// Javascript Engine 
function jsEngine(code){
    return code.split(/\s+/)
}

jsEngine('var a = 5') // ['var', 'a', '=', '5']
```
## Interpreter vs Compiler
* Interpreter
    * translates on the fly 
* Compiler 
    * compiler tries to understand what we want to do
    * and takes our language and changes it to something else

```javascript
function someCalulation(x,y){
    return x + y
}

for(let i = 0; i < 1000; i++){
    someCaluation(5,4)
}
```
#### Inline caching 
```javascript
function findUser(user){
    return `found ${user.firstname} ${user.lastname}`
}

const userData {
    firstname: 'johnson',
    lastname: 'junior
}

findUser(userData)
```
#### Hidden classes 
```javascript 
function Animal(x,y){
    this.x = x
    this.y = y
}

const obj1 = new Animal(1,2)
const obj2 = new Animal(3,4)

obj1.a = 30 
obj1.b = 100

obj2.b = 30
obj2.a = 100

// delete issue changes the classes so they don't match any more
delete obj1.x = 30
```
#### Call stack + Memory Heap
```javascript
const number = 610 // allocate memory for number 
const string = 'some text' // allocate memory for string
const human = { // allocate memory for an object... and it's values
    first: 'Tom',
    last: 'sawyer'
}

// call stack 
function calculate(){
    const sumTotal = 4 + 5
    return sumTotal
}

// call stack, region in memory that operates as FILO mode
calculate()

```
#### Memory Leak
```javascript
let array = []
for(let i = 5; i > 1; i++){
    array.push(i-1)
}
```
Global Variables
```javascript
var a = 1
var b = 1
var c = 1
```
Event listeners
```javascript
var element = document.getElementById('button')
element.addEventListener('click' onClick)
```
SetInterval
```javascript
setInterval(() => {
    // referencing objects
})
```
#### Lexical environment
In javascript our lexical scope (available data + variables where the function was defined) determines our available variable. Not where the function is called (dynamic scope)