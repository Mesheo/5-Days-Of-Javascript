/*
    Criar uma função que separa consoantes  e vogais de uma string
*/

function vowelsAndConsonants(s) {

    // Arrays que irao armazenar as letras dependendo da sua categoria
    let vowels = [];
    let consonants = [];
    
    // Percorrer a string analisando cada letra na posicao [i]
    for (var i =0; i < s.length; i++){
        //verificacao se pertence ao grupo das vogais
        if (['a', 'e', 'i', 'o', 'u'].includes(s[i])){
            vowels.push(s[i]);
        }
        //caso nao, certamente pertence ao grupo das consoantes 
        else {
            consonants.push(s[i]);            
        }
    }
    console.log(vowels);
    console.log(consonants);
}