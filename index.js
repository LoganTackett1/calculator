let displayNum = 0;
let currNum = 0;
let tempNum = 0;
let operation = null;
let toggle = false;

const btnAC = document.querySelector('.AC');
const screen = document.querySelector('.screen');
updateDisplay();

function updateDisplay () {
    screen.textContent = displayNum;
}

btnAC.addEventListener('click',() => {
    operation = null;
    decimalOn = false;
    currNum = 0;
    displayNum = 0;
    updateDisplay();
});

const numInput = document.querySelectorAll('.number');

numInput.forEach(node => {
    node.addEventListener('click',item => {
        if (operation === null) {
            if (displayNum === 0 || displayNum === "0") {
            temp = Number(node.textContent);
            displayNum = temp;
            } else {
                temp = Number(`${displayNum}${Number(node.textContent)}`);
                displayNum = temp;
            }
        updateDisplay();
        } else {
            if (toggle === true) {
                temp = displayNum;
                displayNum = Number(node.textContent);
            } else {
                    displayNum = Number(`${displayNum}${Number(node.textContent)}`);
                }
            toggle = false;
            updateDisplay();
        }
    });
});

const operations = document.querySelectorAll('.op');

operations.forEach(node => {
    node.addEventListener('click', item => {
        toggle = true;
        if (!(operation === null)) {
            currNum = temp;
            currNum = operate(displayNum);
            displayNum = currNum;
            updateDisplay();
        }
        temp = displayNum;
        if (node.textContent === "+") {
            operation = "add";
        }
        if (node.textContent === "-") {
            operation = "subtract";
        }
        if (node.textContent === "*") {
            operation = "multiply";
        }
        if (node.textContent === "/") {
            operation = "divide";
        }
        decimalOn = false;
    });
});

function operate (num) {
    if (operation === "add") {
        operation = null;
        return currNum + num;
    }
    if (operation === "subtract") {
        operation = null;
        return currNum - num;
    }
    if (operation === "multiply") {
        operation = null;
        return currNum * num;
    }
    if (operation === "divide") {
        operation = null;
        return currNum / num;
    }
}

const equals = document.querySelector('.equals') 

equals.addEventListener('click',() => {
    if (!(operation === null)) {
        currNum = temp;
        currNum = operate(displayNum);
        displayNum = currNum;
        updateDisplay();
    }
    temp = 0;
    operation = null;
    decimalOn = false;
})

const decimal = document.querySelector('.decimal');
let decimalOn = false;

decimal.addEventListener('click',()=>{
    if (toggle === true) {
        displayNum = "0.";
        decimalOn = true;
        updateDisplay();
        toggle = false;
    }
    if (decimalOn === false) {
    displayNum = `${displayNum}.`;
    decimalOn = true;
    updateDisplay();
    }
})

const btnSign = document.querySelector('.signChange');

btnSign.addEventListener('click',()=>{
    displayNum = -displayNum;
    updateDisplay();
});
