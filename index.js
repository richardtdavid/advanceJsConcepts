const Shopping = require("./shopping")
const parallelSequenceAndRace = require('./parallelSequenceAndRace')
const threadsConcurrencyAndParallelism = require('./threadsConcurrencyAndParallelism')
const DataStructures = require('./dataStructuresPlayGround')

// Shopping()

// parallelSequenceAndRace()

// threadsConcurrencyAndParallelism()

// DataStructures.arrays()

// const newArray = new DataStructures.MyArray()
// newArray.push('hi')
// newArray.push('you')
// newArray.push('!')
// newArray.delete(0)
// newArray.delete(1)
// newArray.push('are')
// newArray.push('nice')
// console.log(newArray)

// const rev = DataStructures.reverse2('richard')
// console.log(rev)

// const sortedArr = DataStructures.mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30])
// console.log(sortedArr)


const { HashTable } = DataStructures
const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
const ts = myHashTable.get('grapes')
console.log(ts)

