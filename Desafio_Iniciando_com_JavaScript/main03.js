let item = Number(prompt("Digite o valor desejado:"));

if (typeof item === "number" && !isNaN(item)) {
  alert("O valor digitado é um número!");
} else {
  alert("O Valor digitado NÃO é um número!");
}
