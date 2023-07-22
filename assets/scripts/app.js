function handleTimeout(){
    console.log("Time out!");
}

const handleTimeout2 = () =>{
    console.log("Time out! again...");
}

setTimeout(handleTimeout,2000);
setTimeout(handleTimeout2,3000);
setTimeout(()=>{
    console.log("More Time out! again...");
},4000);

function greeter(greeteFn){
    greeteFn();
}

greeter(()=>console.log("hi"));
