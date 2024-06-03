let n1 = Number(prompt("Digite o primeiro número:"));

let n2 = Number(prompt("Digite o segundo número:"));

let sum = n1 + n2;
let subtraction = n1 - n2;
let multiplication = n1 * n2;
let division = Number((n1 / n2).toFixed(2));
let remainder = Number((n1 % n2).toFixed(2));

console.log(sum, subtraction, multiplication, division, remainder);

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${subtraction}`);
alert(`A multiplicação dos dois números é: ${multiplication}`);
alert(`A divisão dos dois números é: ${division}`);
alert(`A resto dos dois números é: ${remainder}`);

let evenOrOdd = sum % 2;
if (evenOrOdd == 0) {
  alert(`A soma dos dois números é par`);
} else {
  alert(`A soma dos dois números é impar`);
}

if (n1 != n2) {
  alert(`Os dois números são diferentes`);
} else {
  alert(`Os dois números são iguais`);
}
