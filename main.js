// definindo a classe contatos
class Contatos {
    constructor(nome, email, telefone, comit){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comit = comit
    }
}
// defimimdo a classe gerenciadorContatos
class GerenciadorContatos {
    constructor(){
        // inicializa a lista de contato =s vazia 
        this.contatos = []
    }

    adicionarContatos(contato) {
        // adiciona um  contato a lista de contatos 
        this.contatos.push(contato);
    }

    exibirContatos(){
        // obtem a lista de contatos 
        const listaContatos = document.getElementById('contato-lista')

        // limpa a lista de contatos
        listaContatos.innerHTML = '';

        // para cada novo contato na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for(const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.comit}`;

            listaContatos.appendChild(li)
        }
    }
}
//cria um objeto da classe ferenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

// cria os elementos nessesarios
const contatoForm = document.getElementById('contato-form');
const emailform = document.getElementById('email');
const nomeForm = document.getElementById('nome');
const telefoneForm = document.getElementById('tel');
const comitForm = document.getElementById('comit')
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const contatoContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit',(event) => {
    event.preventDefault();

    const nome = nomeForm.value;
    const email = emailform.value;
    const telefone = telefoneForm.value;
    const comit = comitForm.value; 

    // criando objeto da classe contaato]
    const contato = new Contatos(nome, email, telefone, comit);

    gerenciadorContatos.adicionarContatos(contato);

    nomeForm.value = ''
    emailform.value = ''
    telefoneForm.value = ''
    comitForm.value = ''
});

// estamos adicionando um manipulador de evem=ntos para o botao mostrar contatos, ele exibe a lista de contatos 
mostrarContatos.addEventListener('click', function(){
    gerenciadorContatos.exibirContatos();
    contatoContatos.style.display = 'block'; // Alterado para 'contatoContatos'
});

ocultarContatos.addEventListener('click', function(){
    contatoContatos.style.display = 'none'; // Alterado para 'contatoContatos'
});

