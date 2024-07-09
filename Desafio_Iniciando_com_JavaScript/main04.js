let texto = prompt("Digite uma String:");
parseInt(texto);
if (typeof texto === "number" && isNaN(texto)) {
  alert("Não é uma string!");
} else {
  alert("É uma string");
}
