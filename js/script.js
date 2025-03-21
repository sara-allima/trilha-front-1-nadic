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