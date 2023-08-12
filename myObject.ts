type User={
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    creditcard?:boolean;
}
let MyUser:User={
    _id:"123",
    name:"suhail",
    email:"suhail@gmail.com",
    isActive: true,
    creditcard:true
}
MyUser.email="ysuhail444";
console.log(MyUser)



