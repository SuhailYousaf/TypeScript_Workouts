interface User{
    readonly dbId:number,
    name:string,
    email:string,
    startTrail():string,
    getCopon(couponName:string,value:number)
}


interface User{
    gitHubToken:string
}

//inheritans
interface Admin extends User{
    role:"admin"
}

const suhail:Admin={
        dbId:1,
        gitHubToken:"suhail123",
        role:"admin",
        name:"suhail",
        email:"suhail@444",
        startTrail:()=>{
            return "trail started"
        },
        getCopon:(name:"suhail",value:12)=>
        {
            return 10
        }
}