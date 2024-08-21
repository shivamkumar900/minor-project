const button = document.getElementById('clickButton');
const uname = document.getElementById('input-username');
const username =document.getElementById('username');


button.addEventListener("click", () => {
    const value= uname.value;
    console.log(value);
    localStorage.setItem("name",value);
    location.reload();
});
window.addEventListener("load", () => {
    const value = localStorage.getItem("name");
    username.innerText = value;
});



// //number
// let num =3.14;
// let num2 =15;


// //string
// const firstName ='shivam'
// const lastName ='kumar';

// //Bollean
// //

// //object
// const person={
//     firstName:'shivam' ,
//     lastName:'kumar',
//     age:'22',
//     isLoggedin:true,
//     lastLogindate:null,
// }
// //console.log(person.age)
// const age=22;
// if(age>=18){
//     console.log("You can vote ");

// }
// else{
//     console.log("you can't vote")
// }


// // function
// function sayHello(){
//     console.log("hello world")
// }
// sayHello()
// sayHello()
// sayHello()
// sayHello()

// const sayhey =()=>{
//     console.log("hey there")

// }
// sayhey();
//const student=["shivam","pyush","om"]
// console.log(student);
// const myArray=[1,2,true,"shivam","😊"]
// console.log(myArray)
// console.log(myArray.indexOf("shivam"));
// student.pop()
// console.log(student)


