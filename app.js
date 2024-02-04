let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new");
let msg = document.querySelector(".win");
let container=document.querySelector(".container-one");
let turnO = true; 
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const reset=() =>{
  turnO="true";
  enable();
  container.classList.remove("hide");
  
}
const newBtns=() =>{
  turnO="true";
  enable();
  container.classList.add("hide");

}
const enable=()=>{
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled=true;

    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  disableBoxes();
};



const showWinner = (winner)=> {
     msg.innerText=`CONGRATULATIONS WINNER IS PLAYER ${winner}`;
     disableBoxes();
     container.classList.remove("hide");
     
}
resetBtn.addEventListener("click",() =>{
  reset();
  container.classList.remove("hide");
})
newBtn.addEventListener("click",() =>{
  newBtns();
  
})
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};




