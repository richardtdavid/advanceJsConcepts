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
