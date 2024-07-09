//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let evenOrOdd = prompt("Digite um número para saber se é par ou ímpar:");

let calc = parseInt(evenOrOdd) % 2;

if (calc !== 0) {
  alert("É um número ímpar");
} else {
  alert("Não é um número ímpar");
}
