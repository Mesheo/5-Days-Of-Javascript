/* Uma funcao que recebe como paramêtro um array de objetos
e deve retornar a quantidade de objetos que tem suas propriedade 
com o mesmo valor*/

function getCount(objects) {
    //incializa o contador
    let count =0;
    
    //percorre o array de objetos ate i atingir o valor do tamanho do array
    for (var i=0; i<objects.length; i++){
        //verifica se satisfaz a condicao proposta
        if (objects[i].x == objects[i].y){
            count++;
        }
    }

    return count;
}


function main() {
    let objects = [];
    
    //lista simulando os inputs do usuario
    input = [1, 1,
            2, 3,
            3, 3,
            3, 4,
            4, 5];

    for (let i = 0; i < input.length; i++) {

        const a = input[i];
        const b = input[i+1];
        
        //criando as propriedades do objeto e empurrando para a lista objects
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}

main();