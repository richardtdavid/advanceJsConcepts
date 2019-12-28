const parallelSequenceAndRace = () => {
    const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay))

    const a = () => promisify('a', 100)
    const b = () => promisify('b', 5000)
    const c = () => promisify('c', 3000)


    const parallel = async () => {
        const promises = [a(), b(), c()]
        const [output1, output2, output3] = await Promise.all(promises)
        return `parallel is done: ${output1} ${output2} ${output3}`
    }

    const race = async () => {
        const promises = [a(), b(), c()]
        const output1 = await Promise.race(promises)
        return `race is done: ${output1}`
    }

    const sequence = async () => {
        const output1 = await a()
        const output2 = await b()
        const output3 = await c()
        return `sequence is done: ${output1} ${output2} ${output3}`
    }


    parallel().then(console.log)
    race().then(console.log)
    sequence().then(console.log)


}

module.exports = parallelSequenceAndRace
