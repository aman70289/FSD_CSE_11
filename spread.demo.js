const student={
    name:"Aman",
    age:22,
    branch:"Cse"
}
const newstudent={
    ...student,
    section:"A"
}


console.log("name is",newstudent.name);
console.log("age is:",newstudent.age);
console.log("branch is",newstudent.branch);
console.log("section",newstudent.section);