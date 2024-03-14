
const form = document.getElementById('form-contatos');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando " />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';

const nomes = [];
const telefones = [];
 
const spamAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spamReprovado = '<span class="resultado reprovado">Reprovado</span>';

let linhas = '';

form.addEventListener('submit', function(e) {

    //tira o comportamento padrao do botao 
    e.preventDefault();
    
    //faz a chamada da função adicionaLinha() responsalvel por adicionar a linha ao clicar no botão
    adicionaLinha();

    //chama a funcao para atualizar conteudo da tabela 
    atualizaTabela();





});

//separando tudo deixando mais organizado com funcao
function adicionaLinha(){
    //criar 2 variaveis pegando o id dos campos input do html
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if(nomes.includes(inputNome.value)){
        alert(`O contato: ${inputTelefone.value} ja foi inserido na agenda.`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);
    
    
        //adicionando uma linha na tabela e o nome e o telefone para cada coluna 
        let linha = '<tr>';
        //adicionando o nome na tabela
        linha += `<td>${inputNome.value}</td>`;
        //adicionando o telefone
        linha += `<td>${inputTelefone.value}</td>`;
        //fechamento da linha
        linha += `</tr>`
    
        linhas += linha;
    }

    //apaga os campos ao clicar no botao
    inputNome.value = '';
    inputTelefone.value = '';
} 


//funcao para atuaçizar conteudo da tabela
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

