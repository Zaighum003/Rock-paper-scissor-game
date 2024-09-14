let user=document.getElementById('yourscore');
let comp=document.getElementById('compscore');
let userscore=0;
let compscore=0;
let message=document.getElementById('msg');

let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
})
const compchoice=()=>{
    const options=["rock","paper","scissor"];
    let random=Math.floor(Math.random()*3); 
    return options[random];
}
const playgame=(userchoice)=>{
    let computer=compchoice();
    console.log("user choice: ",userchoice);
    console.log("computer choice: ",computer);
       if(userchoice==computer){
        console.log("DRAW");
        message.innerText="DRAW";
       }
       else if(userchoice=="rock" && computer=="scissor"){
        console.log("user wins");
        message.innerText="user wins";
        userscore++;}
       else if(userchoice=="rock" && computer=="paper"){
            console.log("computer wins");
            message.innerText="computer wins";
            compscore++;}
       else if(userchoice=="scissor" && computer=="rock"){
            console.log("computer wins");
            message.innerText="computer wins";
            compscore++;}
       else if(userchoice=="scissor" && computer=="paper"){
            console.log("user wins");
            message.innerText="user wins";
            userscore++;}
       else if(userchoice=="paper" && computer=="rock"){
            console.log("user wins");
            message.innerText="user wins";
            userscore++;}
       else if(userchoice=="paper" && computer=="scissor"){
            console.log("computer wins");
            message.innerText="computer wins";
            compscore++;}
        user.innerText=userscore;
        comp.innerText=compscore;
        
}