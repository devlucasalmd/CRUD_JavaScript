function InserirDados(){
    // Se Edit == true, chama a função EditarDados
    if(Edit){
        EditarDados()
        return //Encerra a execução da função
    }

    //Cria as variveis para guardar a informação inseridas
    var valorNome = document.getElementById("name").value
    var valorEmail = document.getElementById("email").value
    
    //cria um objeto com as variaveis
    const data = {nome: valorNome, email: valorEmail}
    
    //inseri na lista o objeto criado
    listaDados.push(data)
    
    //chama a função gerarTabela do script MostrarDados para mostrar na pagina
    gerarTabela(listaDados)
}