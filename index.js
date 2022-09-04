const ques = document.querySelector(".ques");
const answer = document.querySelector(".answer");
const btn = document.querySelector(".btn");
const score = document.querySelector(".score");

let num1 = Math.floor((Math.random()*20) + 1);
let num2 = Math.floor((Math.random()*20) + 1);
let marks = JSON.parse(localStorage.getItem("marks"));



ques.innerText = `What is the value of ${num1} x ${num2} ?`;
console.log("hello");

form.addEventListener("submit" , ()=>{
    if(+answer.value === num1*num2){        
        marks += 1;   
        updateLocalStorage();        
    }
    else{
        marks -= 1;
        updateLocalStorage(); 
        
        
    }
    ques.innerText = `What is the value of ${num1} x ${num2} ?`;
})

function updateLocalStorage(){
    localStorage.setItem("marks" ,JSON.stringify(marks));
}
score.innerText =`score : ${marks}`;