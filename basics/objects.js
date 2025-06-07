
const mySym = Symbol("Key1");

const User = {
    name: "John Doe",
    age: 30,
    email: "xyz@gmail.com",
    location: "Basti",
    isloggedIn: false,
    [mySym]: "myKey1"
};
//console.log(`User Name is ${User["name"]}`); // This will throw an error because 'name' is not defined
console.log( typeof User[mySym]);                         
console.log(User)