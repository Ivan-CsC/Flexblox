const MENSAJE =
  '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

let currentValue = 0;
let finalValue = '';

for (const letter of MENSAJE) {
  if (letter === '#') {
    currentValue += 1;
  } else if (letter === '@') {
    currentValue -= 1;
  } else if (letter === '*') {
    currentValue *= currentValue;
  } else {
    finalValue += currentValue;
  }
}

console.log(finalValue);
