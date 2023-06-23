//Create const for all buttons and the display
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");



let arrayA = [];
let a = "";
let arrayB = [];
let b = "";

let breakLoop = false;

for (let digit of digits){
    digit.addEventListener ("click", function(){

        if (breakLoop === false){           
            if (arrayA.includes(".") && digit.textContent === "."){
                arrayA.pop();
            } else if (digit.className === "back digit"){
                arrayA.pop();
                a = arrayA.join("")
                display.textContent = a;
            } else {
                arrayA.push(digit.textContent);
                a = arrayA.join("")
                display.textContent = a;
            }
        } else if (breakLoop === true){
            if (digit.className === "back digit"){
                arrayB.pop();
                b = arrayB.join("")
                display.textContent = b;
            } else {
            arrayB.push(digit.textContent);
            b = arrayB.join("")
            display.textContent = b;
            }
        }    
    })
}


let currentOp;
for (let operator of operators){
    operator.addEventListener("click", function(){

        currentOp += operator.id
        let op = currentOp[currentOp.length-2];
        console.log(currentOp[currentOp.length-2]);

        if(a === "" && b === ""){
            breakLoop = false;
        } else if (a !== "" && b === ""){
            breakLoop = true;
        } else if (a !== "" && b !== ""){
            breakLoop = true;

            if(op === "+"){
                a = +add(a,b);
                arrayB = [];
                a = isDecimal(a);
                display.textContent = Number(a);
            }else if(op === "-"){
                a = +sub(a,b);
                arrayB = [];
                a = isDecimal(a);
                display.textContent = Number(a);
            }else if(op === "*"){
                a = +mul(a,b);
                arrayB = [];
                a = isDecimal(a)
                display.textContent = Number(a)
            }else if(op === "/"){
                a = +div(a,b);
                if (a === Infinity){
                    display.textContent = "ERROR BRUH";
                    arrayA = [];
                    arrayB = [];
                    currentOp = "";
                    a = "";
                    breakLoop = false;
                } else {
                    arrayB = [];
                    a = isDecimal(a)
                    display.textContent = Number(a)
                }
            } else if(currentOp[currentOp.length-1] === "=" && currentOp[currentOp.length-2] === "="){
                a = a;
                display.textContent = a;
                arrayB = [];
            }
        }
    })
}


//mathematical functions
//addition
let add = function(x,y){
    return +x + +y;
}
//subtraction
let sub = function(x,y){
    return +x - +y;
}
//multiplication
let mul = function(x,y){
    return +x * +y;
}
//division
let div = function(x,y){
    return +x / +y;
}

clear.addEventListener("click",function(){
    arrayA = [];
    arrayB = [];
    currentOp = "";
    a = "";
    breakLoop = false;
    display.textContent = 0;
})

const isDecimal = function(x){
    if (x%1 === 0){
        return x;
    } else {
        return Number(x).toFixed(2);
    }
}



