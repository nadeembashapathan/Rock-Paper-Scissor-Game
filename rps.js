//Accessing elements from HTML & declaring few variable as required
let materials=document.querySelectorAll(".mcontent");
let user=document.querySelector("#usermsg");
let comp=document.querySelector("#compmsg");
let dMsg=document.querySelector(".msg");
let uScore=document.querySelector("#usermsg");
let cScore=document.querySelector("#compmsg");
let userScore=0;
let computerScore=0;
let rbtn=document.querySelector("#rst");



//Generating Computer Choice
let computerMaterial=["Rock","Paper","Scissor"];
let computerGenChoice=()=>{
    return computerMaterial[Math.floor(Math.random()*3)];
}

//Condition to decide the winner with the given arguments
let playgame=(userchoice,compchoice)=>{
    if(userchoice===compchoice){
        dMsg.innerText="The Game is drawn";
    }else{
        if((userchoice==="Rock" && compchoice==="Scissor") || (userchoice==="Paper" && compchoice==="Rock") || (userchoice==="Scissor" && compchoice==="Paper")){
            dMsg.innerText=`User Won, ${userchoice} beats ${compchoice}`;
            userScore++;
            uScore.innerText=userScore;
        }
        else{
            dMsg.innerText=`Computer Won, ${compchoice} beats ${userchoice}`;
            computerScore++;
            cScore.innerText=computerScore;
        }
    }
}


//Adding EventListener and generating userchoice
materials.forEach((pic)=>{
    pic.addEventListener("click",()=>{
        let userchoice=pic.getAttribute("id");
        let compchoice=computerGenChoice();
        playgame(userchoice,compchoice);
    });
});

//Condition when Reset Button is clicked
let resetButton=()=>{
    userScore=0;
    computerScore=0;
    uScore.innerText=userScore;
    cScore.innerText=computerScore;
    dMsg.innerText="Start the Game, select any choice from above and computer also chooses randomly. When you beat computer your score will be added but, when you loose computer gains point. Choose wisely. Your results will be display here";
}
rbtn.addEventListener("click",resetButton);



