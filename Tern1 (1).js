let num = Math.floor(Math.random() * 100);
let outcomeIfElse, outcomeSwitch;

// if...else
if ((num > 10 ? num : num * 2) > 5) {
    let temp = (2 * num) + 1;
    if (temp > 4) {
        outcomeIfElse = 5;
    } else {
        outcomeIfElse = (num % 2 === 0) ? 6 : 7;
    }
} else {
    outcomeIfElse = (num < 3) ? 1 : 2 * (num - 2);
}

console.log("Результат if...else:", outcomeIfElse);

// switch
switch (true) {
    case (num > 10 ? num : num * 2) > 5:
        let tempValue = (2 * num) + 1;
        switch (true) {
            case tempValue > 4:
                outcomeSwitch = 5;
                break;
            default:
                outcomeSwitch = (num % 2 === 0) ? 6 : 7;
                break;
        }
        break;
    default:
        outcomeSwitch = (num < 3) ? 1 : 2 * (num - 2);
        break;
}

console.log("Результат switch:", outcomeSwitch);