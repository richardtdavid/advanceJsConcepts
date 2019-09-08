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

