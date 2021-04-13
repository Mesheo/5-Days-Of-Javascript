/*Funcao de tratamentos de erros
 * Se a é positivo, retorna mensagem 'YES'.
 * Se a é 0, entrega um erro com a mensagem "Zero Error"
 * Se a é negativo, entrega um erro com a mensagem "Negative Error"
 */

function isPositive(a) {
    try{
        if(a == 0){
            throw new Error('Zero Error');
        }
        else if(a < 0){
            throw new Error('Negative Error');
        }
        else{
            console.log('YES');
        }
    }
    //pega o erro criado no block anterior e printa a mensagem
    catch(e){
        console.log(e.message);
    }
}

isPositive(21)
isPositive(0)
isPositive(-4)
