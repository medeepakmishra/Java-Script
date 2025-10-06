// const user = new Object()
// console.log(user);

const user1 = {
    1: "a",
    2: "g"
}

const user2={
    3: "s",
    4: " p"

}

// const user3= Object.assign({},user1,user2)

const user3 = {...user1,...user2}

console.log(user3);
