//variables 
// we use a variables to store data temporarily
let name='mosh';
console.log(name);

//rules to name varaibles
//1.cannot be a reserved keyword 
//2.should be meaningful
//3.cannot start with a number 
//4.cannot contain a pace or hypen(-)
//5.ARE case-sensitive

let firstName='ahmad';
let lastName='Amer';

//constant 
// the value of a constant cannot change 
const interestRate=0.3;

//primitives /values typses
//string 
//numbers 
//boolean
//undefined
//null

let name ='ahmad '//string literal 
let age =30; //number literal
let isApproved=false; //boolean
let firstName=undefined;
let lastName=NULL; 

//java script is a dynaming languages 
  

// objects 
//when we realated with multiple values we declare an object

let person={
name:'ahmad',
age:30


};
//dot notation
person.name='jone '; //change the value 
//bracket notation 
let selection='name';
person['name']='marry';
person[selection]='marryahmad';
console.log(person.name);

//ARRAYS : adata structure we use to represent that we use to represnt a list of items 
let selectedColors=['red','blue'];
selectedColors[2]=1;
console.log(selectedColors.length)// return number of elements 


//Fnctions

function greet(){

console.log('hello world ');

}
greet();


///////////////////

//NUMBERS 
var num1=10;
num1=num1+1; 
num1++;//increment number by 1 
num1--; //decrement num1 by 1
console.log(num1);
// DEVIDE ,multiply , remaider % 
console.log(num1 % 6); //remaider %
 // increment decrement any number i want 
 num1+=10;
 console.log(num1);


 //FUNCTIONS 
/*
1.creat a function 
2. call a function 
*/
//Creat 
 function fun(){
     console.log('this is a function ');
 }
 //CAll 
 fun();

 /* lets creat a function that take in a name 
 and says hello followed by your name 

 for example 

 NAME :"ali "
 return :" hello ali "

 */

 function greeting(yourname){

var result ='hello '+' '+yourname   ; //string concatenation 
console.log(result);

 }
 var name1 =prompt('what is your name ');
 greeting(name1);

 //how do arguments work in function 
 // how do we add 2 numbers together in a function ?

 function sumNumbers(num1 ,num2 ){
     var reslut=num1+num2;
console.log(reslut);
 }
 sumNumbers(10,10);
     
 //while loops 

var num3=0;
while  (num3<100){
num3+=1;
console.log(num3);
}

//for loops 

for(let num=0;num<=100;num++){
    console.log(num);
}

//string in javascript 

let fruit='banana ';
let moreFruits='banana\napple'; //new line 
console.log(fruit.length); // the length of the variable 
console.log(fruit.indexOf('an'));// to see if something can be found 
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split('')); // split the characters
console.log(fruit.split(','));//split by a comma 

//ARRAYS 
let fruits=['apple','banana','orange','pineapples'];
fruits=new Array['banana','apple','orange','pineapples'];
console.log(fruits[1]); //access value at index 2nd 
fruits[0]='pear ';
console.log(fruits);
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//array coommon method 
console.log('to string ',fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop('*'));
console.log(fruits,fruits.pop('*'),fruits);



//object in javascript 
let student={
    first:'rafeh',
    last:'qaz',
    age:25,
    height:170,  
    studentInfo:function(){
        return this.first+'\n'+this.last;
    }
};
console.log(student.first);
console.log(student.last);
student.first='notRafeh'; //change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());



 
 
















  













