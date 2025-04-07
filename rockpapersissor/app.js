let userscore=0;
let compscore=0;
const choices =document.querySelectorAll(".choice");
let mess=document.querySelector("#msg");
let uscore=document.querySelector("#userscore");
let cscore=document.querySelector("#computerscore");

const draw=()=>{
    
    mess.innerText="game draw!";
    mess.style.backgroundColor="yellow";
}
const showwinner=(userwin)=>{
    if(userwin){
        
        mess.innerText="you win!";
        mess.style.backgroundColor="green";
        userscore++;
        uscore.innerText=userscore;
        
    }else{
      
        mess.innerText="you lose!";
        mess.style.backgroundColor="red";
        compscore++;
        cscore.innerText= compscore;
    }

}





const playgame=(userchoice)=>{
    // console.log("userchoice",userchoice);
    const compchoice=gencompchoice();
    // console.log("comp choice",compchoice);

    if(compchoice===userchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ? false:true;
        }
        else if(userchoice==="scissor"){
            userwin=compchoice==="rock" ?false:true;
        }
        else{
            userwin=compchoice==="scissor"? false:true;
        }
        showwinner(userwin);
    }

};
const gencompchoice=()=>{
    const a=["rock","paper","scissor"];
    const rand=Math.floor(Math.random()*3);
    return a[rand];
}

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id")
  
    playgame(userchoice);
});
});
