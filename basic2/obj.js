const mySymbol=Symbol("key1")
const user={
    name: "Bipro",
    age: 23,
    [mySymbol]:"mykey1",
    isLogged: false,
    lastLoginDay:["Monday","Tuesday"]
}
console.log(user.lastLoginDay[1])
console.log(typeof user[mySymbol])
console.log(user)
const obj1=Object.assign({},user)
console.log((obj1)==(user));
