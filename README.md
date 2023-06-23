# Calculator
Final project for the foundations!


23 June Pseudocode:
create const for all .digit
    -> so that we can make it array and add the event listener to it
create const for operator
create const for clear div
create const for backspace div
create const for equals div


const digits = document.querySelectorAll(digits)
digits.addEventListener ("click", addDigit())

current = addDigit() =>{

    if a is empty
    create array
    push digits onto array
    join the stuff from array to create a string of number
    convert string to number

    if a is not empty but b is empty
    create array
    push digits onto array
    join the stuff from array to create a string of number
    convert string to number

    if a and b is not empty
    empty array a
    add total to array a
    empty array b
    push digits onto array b
    join the stuff from array b to create a string of number
    convert string to number

}
when digits are pressed, let a = digits until operator is pressed
let b be the digits pressed until operator is pressed

const operators = document.querySelectorAll(operators)
operators.addEventListener ("click", operate())

operate()=>{
    stop addDigit
    return the final content from addDigit
    let operator = operator selected

    if b is empty array,
    then start addDigit to array

    if b is not empty array
    then start doing the function depending on the operator
    if operate === + then start adding
    if operate === - then start minusing
    etc

    return the total
    save the total in a const
}

operate = 
create const to take in number a
create const to take in number b

functions for operators
1. Add
function (a,b){
    return a + b
}

2. subtract
function (a,b){
    return a - b
}

3. times
function (a,b){
    return a * b
}

4. divide
function (a,b){
    if a or b = 0{
        return error: you punk
    }

    return a/b
}


clear button
- when press clear, a = 0 and b = 0 and display is 0

equals button
- return the current total

backspace button
- .pop item from array