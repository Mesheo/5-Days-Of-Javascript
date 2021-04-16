//incializa a classe
class Exemplo {
  //metodo para inicializar um objeto a partir dessa classe
  constructor(attr1, attr2) {
    this.atributo1 = attr1
    this.atributo2 = attr2
}
  //metodo pertencente a classe
  metodoQualquer() { 
    //printa o objeto exemplo
    console.log(this)
    //printa sua propriedade atributo1
    console.log(this.atributo1)
    //printa sua propriedade atributo2
    console.log(this.atributo2)
}
}


const instanciaDeExemplo = new Exemplo("sou o atributo 1", "sou o atributo2");
instanciaDeExemplo.metodoQualquer();