/*Escolha de jogos no forms*/ 
lucide.createIcons();

let select = document.querySelector('.select'),
selectedValue = document.getElementById('selected-value'),
optionsViewButton = document.getElementById('options-view-button'),
inputsOptions = document.querySelectorAll('.options input');

inputsOptions.forEach(input => { 
    input.addEventListener('click', event => {
        selectedValue.textContent = input.dataset.label; // Coloca nome do jogo selecionado na caixa principal

        const isMouseOrTouch = // Sempre que uma opção for selecionada, o menu de opções é fechado
        event.pointerType === "mouse" ||
        event.pointerType === "touch";

        isMouseOrTouch && optionsViewButton.click();
    })
})
/*Escolha de jogos no forms*/ 

/*Pop-Up*/
const popup = document.querySelector('#popup-container')
const form = document.getElementById('registration-form')

form.addEventListener('submit', (event) => {
    event.preventDefault(); //Evita o envio real do formulário

    //Validação
    const isValid = form.checkValidity();
    const isGameSelected = Array.from(inputsOptions).some(option => option.checked) // Verifica se algum jogo foi selecionado
    if(isValid && isGameSelected) {
        showPopup();
    } else if(!isGameSelected){
        alert('Por favor, selecione um jogo.')
    } else {
        alert('Por favor, preencha os dados corretamente.')
    }
})

function showPopup() {
    popup.classList.add('active')
    setTimeout(function() { //O pop-up irá desaparecer após os 7 segundos de animação
        popup.classList.remove('active')
    }, 7000)
}
/*Pop-Up*/

/*Menu de Navegação*/
const barras = document.querySelector('.uil-bars')

barras.addEventListener('click', mostrarMenu)
function mostrarMenu() {
    let divMenu = document.createElement('div')
    let sobre = document.createElement('a')
    let informacoes = document.createElement('a')
    let inscricao = document.createElement('a')

    sobre.innerText = 'Sobre'
    informacoes.innerText = 'Informações'
    inscricao.innerText = 'Inscreva-se'
    sobre.setAttribute('href', '#sobre-session')
    informacoes.setAttribute('href', '#informacoes-session')
    inscricao.setAttribute('href', '#inscricao-session')

    document.body.appendChild(divMenu)
    divMenu.appendChild(sobre)
    divMenu.appendChild(informacoes)
    divMenu.appendChild(inscricao)

    divMenu.classList.add('menuMobileOn')
    sobre.classList.add('linksMenu')
    informacoes.classList.add('linksMenu')
    inscricao.classList.add('linksMenu'); // Por algum motivo, o menu só sumira se esse ponto e vírgula estiverem aqui
    
    // Adiciona o evento para REMOVER O MENU quando um dos links é clicado
    [sobre, informacoes, inscricao].forEach(link => {
        link.addEventListener('click', () => {
            divMenu.remove() // Remove o menu do DOM
        });
    });
}
/*Menu de Navegação*/