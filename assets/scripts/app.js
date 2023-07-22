const developer={
    name:"Pradeep",
    technology:"JavaScript",
    greet(){
        console.log("Hi");
        console.log(this.technology);
    }

}

console.log(developer.name);
developer.greet();