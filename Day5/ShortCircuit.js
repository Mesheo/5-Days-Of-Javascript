let ferramenta = '';

// O operador lógico || (or) verifica da esquerda pra direita se um item é verdadeiro
let writingUtensil = tool || "pen"
// Nesse caso o output será "pen" já que string vazia é uma afirmação falsa em javascript
console.log(`The ${writingUtensil} is mightier than the sword.`);