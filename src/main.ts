let myObject:object;
myObject={
    name:"ruchika",
    age:22,
}
let array:number[];
array=[1,2,3];
console.log(typeof(array),"8");
let myArray:Array<number>;
myArray=[1,2,3,4];
console.log(myArray[0],"11");
console.log(myObject,"12");
let tuple:[string,number,boolean];
tuple=["hello",2,true];
console.log(tuple[2],"15");
enum Color{Red,Green,yellow}
let myColor:Color=Color.Green;
console.log(myColor,"18");

let arr1=['hey','ruchika','byee'];
let arr2=['hey','byee',222];
let arr3=['hey',111,true];
arr1.push('2');
console.log(arr1,"24");
arr2.push('');
arr2.push(224)
console.log(arr2,"26");
// type guitar={
//     name:string,
//     active:boolean,
//     albums:(string|number)[]
// }
interface guitar{
    name?:string,
    active:boolean,
    albums:(string|number)[]
}
let enh:guitar={
    name:'ruchika',
    active:false,
    albums:[1,"rui"]
}
let jp:guitar={
    name:'rudra',
    active:true,
    albums:[1,2]
}
// jp=enh
// enh=jp;
const greetingGuitar=(guitarist:guitar)=>{
    if(guitarist.name){
        return `hello ${guitarist.name.toUpperCase()}!`;
    }
    return `hello!`
}
enum Grade{
    A=2,
    B,
    D,
    E,
    G,
    Y
}
console.log(Grade,"64");
console.log(Grade.E,"65");
console.log(greetingGuitar(enh),"66");