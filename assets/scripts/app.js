class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("Hi");
        
    }

}
const user1=new User("Pradeep", 34);
console.log(user1);
console.log(user1.name);
user1.greet();