const chalk = require('chalk')
// Data Structures 

// Arrays
const arrays = () => {
    const strings = ['a', 'b', 'c', 'd']
    //4*4 = 16 bytes of storage

    // push 
    strings.push('e') // O(1)

    // pop
    strings.pop()
    strings.pop() // O(1)

    // unshift
    strings.unshift(('x')) // O(n)

    // splice
    strings.splice(2, 0, 'alien') // O(n)


    console.log(chalk.red(strings))

}

// implementing an Array
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this._shiftItems(index)
        return item
    }

    _shiftItems(item) {
        for (let i = item; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

}

const reverse = str => str.split('').reverse().join('')

const reverse2 = str => str.split('').reduce((a, b) => b + a)

const mergeSortedArrays = (a, b) => a.concat(b).sort((x, y) => x - y)

const mergeSortedArrays2 = (a, b) => ([...a, ...b].sort((x, y) => x - y))








module.exports = {
    arrays,
    MyArray,
    reverse,
    reverse2,
    mergeSortedArrays,
    mergeSortedArrays2,
}