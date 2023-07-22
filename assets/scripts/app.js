const hobbies=["Sports","Cooking"];
const newhobbies=["Reading"];
const mergedhobbiesWithoutSpread=[hobbies,newhobbies];
console.log(mergedhobbiesWithoutSpread);
const mergedhobbiesWithSpread=[...hobbies,...newhobbies];
console.log(mergedhobbiesWithSpread);

const user={
    name:"Pradeep",
    technolgy:"JavaScript",
};
const extendedUser={
    isAdmin:true,
    ...user
};
console.log(extendedUser);


