let a : number=4;
let str:string="om prakash";
let boolen:boolean=false;
let b:Array<string>=["om",1,'prakash'];
let arr:Array[]=[1,2,om];
let arr1:Array<number|string|boolean|Array<number>>=
[
    'om',1,false,[1,2,3]
]
let h1:{
    loading:boolean;
    error:boolean;
    data:[];
}={
    loading:true,
    error:true,
    data:[],
}
let h2:Record<string,boolean>={
    loading:true,
    error:true,
}

let i:Array<{
    name:string;
    age:number;
    place:string;
}>=[
    {name:"om",age:26,place:'chamba'},
    {name: 'kalpa',age:24,place:'chamba'}
]


const add=(a:number,b:number):number =>{
    return a+b;
}
add(1,2)

let j:Array<number[]>=[
    [1,2],
    [2,4],
    [9,2],
]

let country:Array<"India"|"china">=[
    'India',
    "china",
]
//defining custom datatype

type custom="India"|"china";
let contry:Array<custom>=[
    'India',
    "china",
//we will not add other data than custom
]

type user={
    name:string,
    age?:number,
    email:string,
    gender:string
}
//? is used to create optional field 
// something written before it becomes optional
let users:Array<user>=[
    {name:"om",age:34,email:'dldld',gender:"male"},
    {name:"om",email:'dldld',gender:"male"}
]

type k=[string,number];
let k1:k[]=[
    ["a",1],
    ["b",2]
]
enum Gender {
    "male",
    "female",
    "trans"
}
let mul=(a:number,b:number):void=>{
    console.log(a+b)//when nothing to return use void
}
