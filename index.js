// Amazon shopping 
const user = {
    name: 'Richard',
    active: true,
    cart: [],
    purchases: []
}

let amazonHistory = []

const compose = (f, g) => (...args) => f(g(...args))

const purchaseItem = (...fns) => fns.reduce(compose)
const addItemToCart = (user, item) => {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return { ...user, cart: updateCart }
}
const applyTaxToItems = (user) => {
    amazonHistory.push(user)
    const { cart } = user
    const taxRate = 1.3
    const updatedCart = cart.map(item => ({ name: item.name, price: item.price * taxRate }))
    return { ...user, cart: updatedCart }
}
const buyItem = (user) => {
    amazonHistory.push(user)
    return ({ ...user, purchases: user.cart })
}
const emptyCart = (user) => {
    amazonHistory.push(user)
    return ({ ...user, cart: [] })
}
const refundItem = () => { }




const ts = purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemToCart)(user, { name: 'laptop', price: 200 })
// console.log(ts)
console.log(amazonHistory)