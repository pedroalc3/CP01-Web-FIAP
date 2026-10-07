console.clear();
console.log("========================================");
console.log("CHECKPOINT 1 - WEB DEVELOPMENT");
console.log("========================================");

// =====================================================
// Exercicio 1
// =====================================================
console.log("\n========== Exercicio 1 ==========");

const valorA = 10;
const valorB = 20;

const resultadoDiferente = valorA != valorB;
const resultadoEstritamenteIgual = valorA === valorB;
const resultadoMaiorOuIgual = valorB >= valorA;

console.log(`${valorA} != ${valorB}:`, resultadoDiferente);
console.log(`${valorA} === ${valorB}:`, resultadoEstritamenteIgual);
console.log(`${valorB} >= ${valorA}:`, resultadoMaiorOuIgual);


// =====================================================
// Exercicio 2
// =====================================================
console.log("\n========== Exercicio 2 ==========");

let peso = parseFloat(prompt("Digite seu peso em kg: "));
let altura = parseFloat(prompt("Digite sua altura em metros: "));
let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert(`Você está abaixo do peso. Seu IMC é de ${imc.toFixed(2)}`);
}

else if (imc >= 18.5 && imc <= 24.9) {
    alert(`Você está com o peso normal. Seu IMC é de ${imc.toFixed(2)}`);
}
else {
    alert(`Você está acima do peso. Seu IMC é de ${imc.toFixed(2)}`);
}

// =====================================================
// Exercicio 3
// =====================================================
console.log("\n========== Exercicio 3 ==========");

for (numero = 1; numero <= 10; numero ++){
    console.log("O valor da contagem é "+ numero)
}