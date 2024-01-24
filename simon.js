

let userSeq = [];
let gameSeq = [];
let level = 0;
let started = false;
let h3 = document.querySelector("h3")
let btns = ["yellow", "green","blue","red"];
document.addEventListener("keypress",function(){
   if(started == false){
    console.log("Game is started!!!");
     started = true;
  }
    
   levelUp();

})
  function btnFlash(btn){
      btn.classList.add("flash")
      setTimeout(function(){
        btn.classList.remove("flash")
      },250)
  }


  function levelUp(){
     userSeq = [];
    level++;
    h3.innerText = `level ${level}`

   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
  
   let randbtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   btnFlash(randbtn);
   
   console.log(gameSeq);
   console.log(randColor);
   console.log(randIdx);
   console.log(randbtn);
  }

  function check(idx){
      
      if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
          setTimeout(levelUp,1000)
        }
      }else{
        h3.innerHTML= `Game Over!!! Your Score was  <b>${level}</b> <br>Press any key to start. `;
        document.querySelector("body").style.background ="red";
        setTimeout(()=>{
          document.querySelector("body").style.background="white";
        },150)
        reset()
      }
  }
  
  function userbtn(){
     let btn = this;
    console.log(btn);
    btnFlash(btn) 
    let userColor = btn.getAttribute("id")
    userSeq.push(userColor);
     
     check(userSeq.length-1);
    //  console.log(userSeq)
   }

   let allbtns = document.querySelectorAll(".btn")
   for(color of allbtns){
       color.addEventListener("click",userbtn)
   }

   function reset(){
     started = false;
     userSeq =[];
     gameSeq= [];
     level =0;
       }