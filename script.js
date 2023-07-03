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



let typed = [0];
let currentOp = ["."];
window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented){
        return;
    }
    typed.pop(0);
    typed.push(event.key);
    console.log(typed[0]);
    
    if (typed[0] === "1" ||typed[0] === "2" ||typed[0] === "3" ||typed[0] === "4" ||typed[0] === "5" ||typed[0] === "6" || typed[0] === "7" ||typed[0] === "8" || typed[0] === "9" ||typed[0] === "0" ||typed[0] === "." ||typed[0] === "Backspace") {
    if (breakLoop === false){
        if (arrayA.includes(".") && typed[0] === "."){
                arrayA.pop();
        }else if (typed[0] === "Backspace"){
            console.log(arrayA, arrayB);
            arrayA.pop();
            a = arrayA.join("")
            display.textContent = a;
        } else {
        arrayA.push(typed[0]);
        a = arrayA.join("")
        display.textContent = a;
        }
    } else if (breakLoop === true){
        if (typed[0] === "Backspace"){
            console.log(a, b);
            arrayB.pop();
            b = arrayB.join("")
            display.textContent = b;
            arrayA.pop();
            a = arrayA.join("");
            display.textContent = a;
        } else {
        arrayB.push(typed[0]);
        b = arrayB.join("")
        display.textContent = b;
        }
    }} else if(typed[0] === "+" ||typed[0] === "-" || typed[0] === "*" ||typed[0] === "/" || typed[0] === "=" || typed[0] === "Enter"){
        if (typed[0] === "+" ||typed[0] === "-" || typed[0] === "*" ||typed[0] === "/" || typed[0] === "="){
            currentOp += typed[0];
        }else if (typed[0] === "Enter"){
            currentOp += "=";
        }
        let op = currentOp[currentOp.length-2];


        if(a === "" && b === ""){
            breakLoop = false;
        }else if (a !== "" && b === ""){
            breakLoop = true;
        }else if (a !== "" && b !== ""){
            breakLoop = true;
            if(op === "+"){
                a = +add(a,b);
                arrayB = [];
                a = isDecimal(a);
                arrayA = Array.from(String(a), myFunc);
                console.log(arrayA);
                display.textContent = Number(a);
            }else if(op === "-"){
                a = +sub(a,b);
                arrayB = [];
                a = isDecimal(a);
                arrayA = Array.from(String(a), myFunc);
                console.log(arrayA);
                display.textContent = Number(a);
            }else if(op === "*"){
                a = +mul(a,b);
                arrayB = [];
                a = isDecimal(a)
                arrayA = Array.from(String(a), myFunc);
                console.log(arrayA);
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
                    arrayA = Array.from(String(a), myFunc);
                    console.log(arrayA);
                    display.textContent = Number(a)
                }
            } else if(currentOp[currentOp.length-1] === "=" && currentOp[currentOp.length-2] === "="){
                a = a;
                display.textContent = a;
                arrayB = [];
            }}
    } else if (typed[0] === "Escape"){
    arrayA = [];
    arrayB = [];
    currentOp = "";
    a = "";
    breakLoop = false;
    display.textContent = 0;
    }
});



for (let digit of digits){

    digit.addEventListener ("click", function(){

        if (breakLoop === false){           
            if (arrayA.includes(".") && digit.textContent === "."){
                arrayA.pop();
            } else if (digit.className === "back digit" || typed[0] === "Backspace"){
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
                arrayA.pop();
                a = arrayA.join("");
                display.textContent = a;
            } else {
            arrayB.push(digit.textContent);
            b = arrayB.join("")
            display.textContent = b;
            }
        }    
    })

}


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
                arrayA = Array.from(String(a), myFunc);
                display.textContent = Number(a);
            }else if(op === "-"){
                a = +sub(a,b);
                arrayB = [];
                a = isDecimal(a);
                arrayA = Array.from(String(a), myFunc);
                display.textContent = Number(a);
            }else if(op === "*"){
                a = +mul(a,b);
                arrayB = [];
                a = isDecimal(a)
                arrayA = Array.from(String(a), myFunc);
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
                    arrayA = Array.from(String(a), myFunc);
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

let myFunc = num => Number(num);