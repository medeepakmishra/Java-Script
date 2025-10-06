
const mySym = Symbol("key1")
const user = {
    name: "deepak",
    [mySym]: "myKey12",
    age: 23,
    location: "ayodhya",
    isLoggedin: false,
}

console.log( typeof user[mySym]);

Object.freeze(user);
user.name="deepak2"

console.log(user);
