
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new");
let message = document.querySelector("#mess");
let container = document.querySelector(".mes"); // Selects the correct element

let turn0 = true;
let count =0;

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        checkwinner();
        let isWinner = checkwinner();

        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
});


const gameDraw = () => {
    message.innerText = `Game was a Draw.`;
    container.classList.remove("hide"); 
    disablebox();
  };

const disablebox = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = ""; 
    });
};

const showwinner = (winner) => {
    message.innerText = `Congratulations, the winner is ${winner}`;
    container.classList.remove("hide");
    disablebox();
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pval0 = boxes[pattern[0]].innerText;
        let pval1 = boxes[pattern[1]].innerText;
        let pval2 = boxes[pattern[2]].innerText;

        if (pval0 !== "" && pval1 !== "" && pval2 !== "") {
            if (pval0 === pval1 && pval1 === pval2) {
                console.log("Winner:", pval0);
                showwinner(pval0);
            }
        }
    }
};

const resetgame = () => {
    turn0 = true; 
    count=0;
    enableboxes(); 
    container.classList.add("hide"); 
};


resetbtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", resetgame);
