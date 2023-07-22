let greetMessageWithFunctionKeyword=function(){
    return "Hello world with function keyword";
}

let greetMessageWithoutFunctionKeyword=()=>{
    return "Hello world without function keyword";
}

let result=(userName,message)=>{
    return "Hi "+userName+", "+message;
}

let addition=(a,b)=>{
    return a+b;
}

let multiplication= a =>{
    return a*3;
}

let division=a=>a/3;

let getNewObj=number=>({age:number});

let getEmpObj=(name,designation,salary)=>({name:name,designation:designation,salary:salary});

console.log(greetMessageWithFunctionKeyword());
console.log(greetMessageWithoutFunctionKeyword());
console.log(result("Pradeep","How are you?"));
console.log("Addtion of two numbers is,"+addition(2,3));
console.log("2 * 3 is,"+multiplication(2));
console.log("9 / 3 is,"+division(9));
console.log(getNewObj(34));
console.log(getEmpObj("Pradeep","Javascript Developer","35,000"));