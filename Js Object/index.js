const mySym = Symbol("key1");
const JsUser = {
    name:"varun",
    "Full Name" : "Varun Sehgal",
    age: 20,
    location: "Dabra",
    [mySym] : "key1" ,
    email : "varunsehgal2005@gmail.com",
    isloggedIn : "fales",
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email);
// console.log(JsUser.mySym);
console.log(JsUser[mySym]);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
console.log("Hello Varun")