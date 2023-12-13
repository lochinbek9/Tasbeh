

const boxBtn = document.querySelector(".box-btn");

const text = document.querySelector(".text");

const resetBtn = document.querySelector(".reset");

const score = document.querySelector("h2");

const all = document.querySelector("h4");

let audio = new Audio('./music/ovoz.mp3');

let a = 0;
let b = 0;
let c = 1

boxBtn.addEventListener("click", () =>{
    a++;
    
    all.textContent = 'jami: ' +c 
    c++ 
audio.play();


    
    text.textContent = a+'/33' ;
    
    if(a===33){
        a = 0;
    text.textContent = 0;
    
    score.textContent = ++b;
    }

});

resetBtn.addEventListener("click", () =>{
    a = 0;
    text.textContent = 0;
});