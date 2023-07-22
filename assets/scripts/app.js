/*const userNameData=["Pradeep","Gowda"];
let firstName=userNameData[0];
let lastName=userNameData[1];*/
const [firstName,lastName]=["Pradeep","Gowda"];
console.log(firstName);
console.log(lastName);



/*const user={
    firstName:"Pradeep",
    lastName:"Gowda"
};
console.log(user.firstName);
console.log(user.lastName);
*/

const {firstName:name1,lastName:name2}={
    firstName:"Pradeep",
    lastName:"Gowda"
};
console.log(name1);
console.log(name2);
