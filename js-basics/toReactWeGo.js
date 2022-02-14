
// Important for React: 

//1. Arrow function: ------------------------------------------------------
// React use example : <button onClick={ () => { //Do Somthing } }> </button>
// Export is used in order for the function to be seen outside the file
// export const DoSomething = () => { ... }
const DoSomething = () => {
    //content
} 
// <=>
// export default function DoSomethingEchiv () { ... }
function DoSomethingEchiv () {
    //content
}

//2. Ternary Operators: ---------------------------------------------------
/* React use example :
const Component = () => {
    return age >10 ? <h1>Pedro</h1> : <h1>Marian</h1>
};
*/
let age = 16;
let  nameVar = age > 10 && "Pedro"; 
console.log(nameVar); // nameVar = "Pedro"

nameVar = age < 10 && "Pedro"; 
console.log(nameVar); // nameVar = false

nameVar = age < 10 || "Marcel"; 
console.log(nameVar); // nameVar = "Marcel"

nameVar = age > 10 || "Marcel"; 
console.log(nameVar); // nameVar = true

nameVar = age > 10 ? "Marian" : "AduTelefonu";
console.log(nameVar); // nameVar = "Marian"

//3. Objects : ------------------------------------------------------
age = 20;

const person = {
    name : "Pedro",
    age, // <=> age: age,
    isMarried: false,
};

const {name, age2, isMarried} = person;
    // <=>
const nameV = person.name, age3 = person.age, isMarried2 = person.isMarried;

const person2 = { ...person, name: "Jack" }; // <=> creating another person obj, 
        // with the same values, but different name. This also works with arrays


//4. Arrays : -------------------------------------------------------
let names = ["Pedro", "Jessica", "Carol"];
    // .map(), .filter(), .reduce() from Java also work in JS 

//5. Promises + Async + Await + Fetch : ----------------------------------------

    // Later :)