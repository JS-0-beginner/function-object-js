/////// Object Introduction \\\\\\\\

// multiple objects with multiple properties

var student1 = 
{
    id: 115,
    name: "Avishek",
    marks: 75,
    contact: '01782869159',
};

var assignment =
{
    name: 'Java Script',
    topics: 4,
    pages: 50,
    duration: '2days',

};

var institution =
{
    location: 'Dhaka',
    area: "Two Acres",
    departments: 8,
    students: 45000,
};
console.log(" ");
console.log("Students");
console.log(student1);

console.log(" ");

console.log("Assignment");
console.log(assignment);

console.log(" ");

console.log("Institution");
console.log(institution);

console.log(" ");

console.log('Search any item from Student object');

console.log(student1.name);
var rollnum = student1.id;
console.log(rollnum);
console.log(" ");


// student1.id = 466;
// student1[id]= 466;
var changedId = 'id';
student1[changedId]=478;

console.log("Changed value of id from student object");

console.log(student1);

