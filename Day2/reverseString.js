function reverseString(s) {
    //Pegamos a string s e separamos todos os caracter em substrings atraves do s.plit("")
    // em seguida revertemos esse array de caracteres e juntamos para formar uma nova string atraves do .join("")
    try {
        s = s.split("").reverse().join("");
       
    } 
    catch (e) {
         console.log('s.split is not a function');
         //aqui o catch percebe um erro e armazena na variavel e
         // em seguida ele executa a tarefa que escolhemos
    }
    finally{
        console.log(s);
    }
    
}

const stdin1 =  "1234";
const stdin2 = Number(1234);

reverseString(stdin1);
reverseString(stdin2);