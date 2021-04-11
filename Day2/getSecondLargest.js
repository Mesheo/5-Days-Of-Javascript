/**
*   Funcao para pegar o segundo maior numero de um array
**/
function getSecondLargest(nums) {
    // declara as variaveis que iremos atualizar durante a funcao
    let largestNumber = 0;
    let secondLargest = 0;
    // percorre os numeros do array nums para achar a maior variavel, atualizando largestNumber a cada interacao 
    for (var num in nums){
        if (largestNumber < nums[num]){
            largestNumber = nums[num];
        }
    }
    // agora com o maior valor definido fazemos a mesma varredura para encontrar o segundo maior valor
    for (var num in nums){
        if (secondLargest < nums[num] && nums[num] < largestNumber){
            secondLargest = nums[num];
        }
    }
    return secondLargest;
}


function main() {
    var nums = [1, 2, 4, 5];    
    console.log('o segudno maior nùmero é: ', getSecondLargest(nums));
}

main()