function checkConditions() {
  let num = Math.floor(Math.random() * 20) + 1;
  console.log(`Число: ${num}`);

  let output;

  // if...else
  if (num > 10) {
    output = 'num больше 10 ';
  } else {
    output = 'num меньше или равно 10 ';
    if (num === 5) {
      output += 'специальный случай ';
    }
  }

  if (num === 15) {
    output += 'но num не равно 15 ';
  }

  if (num > 5) {
    output += 'и num больше 5 ';
  } else {
    output += 'и num меньше или равно 5 ';
  }

  if (num % 2 !== 0) {
    output += 'и num нечетное ';
  } else {
    output += 'и num четное ';
  }

  console.log("Результат if...else:", output);

  // switch
  output = '';
  switch (true) {
    case num > 10:
      output += 'num больше 10 ';
      break;
    default:
      output += 'num меньше или равно 10 ';
      switch (num) {
        case 5:
          output += 'специальный случай ';
          break;
      }
      break;
  }

  switch (num) {
    case 15:
      output += 'но num не равно 15 ';
      break;
  }

  switch (true) {
    case num > 5:
      output += 'и num больше 5 ';
      break;
    default:
      output += 'и num меньше или равно 5 ';
      break;
  }

  switch (num % 2 === 0) {
    case false:
      output += 'и num нечетное ';
      break;
    default:
      output += 'и num четное ';
      break;
  }

  console.log("Результат switch:", output);
}

checkConditions();