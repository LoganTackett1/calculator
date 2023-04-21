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
    temp = 0;
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
                if (etoggle === true) {
                    temp = 0;
                    displayNum = Number(node.textContent);
                    etoggle = false;
                } else if (toggle === true) {
                    displayNum = Number(node.textContent);
                    toggle = false;
                } else if (decimalOn === true) {
                displayNum = (`${displayNum}${Number(node.textContent)}`);
                } else {   
                temp = Number(`${displayNum}${Number(node.textContent)}`);
                displayNum = temp;
                }
            }
        updateDisplay();
        etoggle = false;
        } else {
            if (toggle === true) {
                temp = displayNum;
                displayNum = Number(node.textContent);
            } else if (etoggle === true) {
                displayNum = Number(node.textContent);
                etoggle = false;
            } else if (decimalOn === true) {
                displayNum = (`${displayNum}${Number(node.textContent)}`);
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
            displayNum = roundFive(currNum);
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
        return Number(currNum) + Number(num);
    }
    if (operation === "subtract") {
        operation = null;
        return Number(currNum) - Number(num);
    }
    if (operation === "multiply") {
        operation = null;
        return Number(currNum) * Number(num);
    }
    if (operation === "divide") {
        operation = null;
        return Number(currNum) / Number(num);
    }
}

const equals = document.querySelector('.equals');
let etoggle = false;

equals.addEventListener('click',() => {
    if (!(operation === null)) {
        currNum = temp;
        currNum = operate(displayNum);
        displayNum = roundFive(currNum);
        updateDisplay();
        etoggle = true;
        decimalOn = false;
    }
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
    etoggle = false;
    }
})

const btnSign = document.querySelector('.signChange');

btnSign.addEventListener('click',()=>{
    displayNum = -displayNum;
    updateDisplay();
});

const btnPercent = document.querySelector('.toPercent')

btnPercent.addEventListener('click',() => {
    displayNum = displayNum/100;
    etoggle = true;
    updateDisplay();
});

function roundFive(num) {
    return (~~(num*(10**5)))/(10**5);
}