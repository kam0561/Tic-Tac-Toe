let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let message = document.querySelector(".winner")
let turnO= true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO == true)
        {
            box.innerText="O";
            turnO= false;
        }
        else{
            box.innerText="X";
            turnO= true;
        }
        box.disabled= true;
        checkWinner();
        checkDraw();
    });
});

resetBtn.addEventListener("click",()=>{
    boxes.forEach((box) =>
    {
        box.innerText="";
        box.style.color="black"
        box.disabled= false;
        message.innerText="";
    })
})

const checkWinner=()=>{
    for(pattern of winPattern)
    {
        a= boxes[pattern[0]].innerText;
        b= boxes[pattern[1]].innerText;
        c= boxes[pattern[2]].innerText;

        if (a==b && b==c && (a!=''|| b!=''||c!=''))
        {
            boxes[pattern[0]].style.color="green";
            boxes[pattern[1]].style.color="green";
            boxes[pattern[2]].style.color="green";
            boxes.forEach((box) =>
            {
                box.disabled= true;
            })
            message.innerText="The Winner is "+a;
        }
    }
}

const checkDraw = () => {
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === '') {
            isDraw = false; // If any box is empty, it's not a draw
        }
    });
    if (isDraw) {
        message.innerText="DRAW !";
    }
};