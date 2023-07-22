const hobbies=["Sports","Cooking","Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index=hobbies.findIndex((item)=>{ return item==="Sports"});
console.log(index);

const index1=hobbies.findIndex((item)=>  item==="Working");
console.log(index1);

const editedHobbies=hobbies.map((item)=>item+" !")
console.log(editedHobbies);

const editedHobbiesObj=hobbies.map((item)=>({text:item}));
console.log(editedHobbiesObj);