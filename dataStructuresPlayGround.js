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

// Hash Tables 

class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }

        this.data[address].push([key, value])
    } // O(1)

    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address]

        if (currentBucket) {
            let value
            currentBucket.forEach(b => {
                if (b[0] === key) {
                    value = b[1]
                }
            })
            return value
        } // O(1) 

        return undefined
    }

    keys() {
        const keysArray = []
        this.data.forEach(keys => keys.forEach(key => keysArray.push(key[0])))
        return keysArray
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
}

const firstRecurringCharacter = arr => {
    const set = new Set()
    return arr.map(char => {
        if (!set.has(char)) {
            set.add(char)
        } else {
            return char
        }
    }).filter(nums => typeof nums !== 'undefined')[0]
}






module.exports = {
    arrays,
    MyArray,
    reverse,
    reverse2,
    mergeSortedArrays,
    mergeSortedArrays2,
    HashTable,
    firstRecurringCharacter
}

