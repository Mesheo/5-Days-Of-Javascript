/* Criacao de um objeto que recebe os parametros a e b.
A funcao deve retornar um objeto com as seguintes propriedades:

length: Esse valor é igual ao a .
width: Esse valor é igual ao b .
perimeter: Esse valor é igual a 2*(a+b) 
area: Esse valor é igual a (a*b) 
*/

function Rectangle(a, b) {
    var Rectangle = {};

    Rectangle.length = a;
    Rectangle.width = b;
    Rectangle.perimeter = 2*(a+b);
    Rectangle.area = (a*b);
    
    return Rectangle;
}

function main() {
    const a = 4;
    const b = 5;
    
    //armazenando o objeto criado pela funcao rectangle na constante rec
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

main();