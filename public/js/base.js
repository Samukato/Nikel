const nome = "Samuel Eleoterio";
let nome2 = "";
let pessoaDefault = {
    nome: "Samuel ELeoterio",
    idade: "24",
    trabalho: "programador"
}



function alterarNome(){
    nome2="Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2=novoNome;
    console.log("Valor alterado recebendo um nome: ");
    console.log(nome2);
}

function imprimirPessoa(pessoa){

    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);
}



imprimirPessoa(pessoaDefault);





//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva")
//alterarNome();


