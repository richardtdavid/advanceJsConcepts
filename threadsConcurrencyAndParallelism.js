const threadsConcurrencyAndParallelism = () => {
    const concurrency = `
        Concurrency 
        (Single-Core CPU)
         ___
        |th1|
        |   |
        |___|___
            |th2|
         ___|___|
        |th1|
        |___|___
            |th2|
    `

    const parallelism = `
        Concurrency + parallelism
        (Multi-Core CPU)

        ___ ___
       |th1|th2|
       |   |___|
       |   |___
       |___|th2|
        ___|___|
       |th1|
       |   |___
       |   |th2|
    `
    console.log(concurrency, parallelism)
}

module.exports = threadsConcurrencyAndParallelism