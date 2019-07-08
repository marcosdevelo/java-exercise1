window.onload= () =>{

let myArray=[];
let myAdj=['blue', 'big', 'small'];
let myNoun=['car', 'dog', 'fish'];
let myVerb=['ate', 'threw', 'drove'];
let myPossession=['car', 'laptop', 'bike'];
let myWhere=['in the river', 'outside', 'in the pool'];

let randomValue1 = myAdj[Math.floor(Math.random() * myAdj.length)];
let randomValue2 = myNoun[Math.floor(Math.random() * myNoun.length)];
let randomValue3 = myVerb[Math.floor(Math.random() * myVerb.length)];
let randomValue4 = myPossession[Math.floor(Math.random() * myPossession.length)];
let randomValue5 = myWhere[Math.floor(Math.random() * myWhere.length)];

let excuse=randomValue1 +" "+ randomValue2 +" "+ randomValue3 +" "+ randomValue4 +" "+ randomValue5

document.querySelector('#excuse').innerHTML= excuse;
}