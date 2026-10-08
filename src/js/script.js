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

// =====================================================
// Exercício 4
// =====================================================
console.log("\n========== Exercício 4 ==========");

const herois = [
    "Thor",
    "Hulk",
    "Capitão América",
    "Arqueiro",
    "Viúva Negra"
];

console.log("Array completo:", herois);
console.log("Elementos do Array:");
herois.forEach((heroi, indice) => {
    console.log(`${indice + 1} - ${heroi}`);
});

// =====================================================
// Exercício 5
// =====================================================
console.log("\n========== Exercício 5 ==========");

const temPermissao = true;
const mensagemPermissao = temPermissao
    ? "Usuário possui permissão."
    : "Usuário não possui permissão.";

console.log(`Permissão: ${temPermissao}`);
console.log(mensagemPermissao);

// =====================================================
// Exercício 6
// =====================================================
console.log("\n========== Exercício 6 ==========");

const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";

// Altere estes dois valores para testar outras situações de login.
const usuarioDigitado = "admin";
const senhaDigitada = "1234";

if (usuarioDigitado === usuarioCadastrado && senhaDigitada === senhaCadastrada) {
    console.log("Login realizado com sucesso!");
} else {
    console.log("Falha de autenticação. Usuário ou senha incorretos.");
}

console.log("Usuário testado:", usuarioDigitado);

// =====================================================
// Exercício 7
// =====================================================
console.log("\n========== Exercício 7 ==========");

const notas = [
    7.0,
    8.0,
    6.5,
    9.0,
    5.5,
    7.5,
    8.5
];

const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
const media = somaNotas / notas.length;

console.log("Notas:", notas);
console.log("Soma das notas:", somaNotas.toFixed(2));
console.log("Média:", media.toFixed(2));

if (media >= 6) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!");
}

// =====================================================
// Exercício 8
// =====================================================
console.log("\n========== Exercício 8 ==========");

let nome = prompt("Digite seu nome");
console.log(`Olá dev ${nome}`);


// =====================================================
// Exercício 9
// =====================================================
console.log("\n========== Exercício 9 ==========");

let sa = prompt("Digite sua senha atual: ");
let sn = prompt("Digite uma nova senha: ");

if (sn != sa) {
    console.log("Senha alterada com sucesso!");
} else {
    console.log("A nova senha precisa ser diferente da atual!");
}