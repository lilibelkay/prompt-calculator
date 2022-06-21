let input1 = window.prompt("Enter the first number:");
let input2 = window.prompt("Enter the second number:");
let result = window.prompt("Pick an operator: +, -, *, /");

input1 = parseFloat(input1);
input2 = parseFloat(input2);

if (result == "+") {
    answer = input1 + input2;
    alert(answer);
} else if (result == "-") {
    answer = input1 - input2;
    alert(answer);
} else if (result == "*") {
    answer = input1 * input2;
    alert(answer);
} else if (result == "/") {
    answer = input1 / input2;
    alert(answer);
} else {
    alert("invalid operator");
}

document.write(answer);