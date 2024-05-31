document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});


// Defini o layout inicial como Dissertativa
document.getElementById('left-column').innerHTML = `
<div class="input-box">
    <input type="text" placeholder="Digite a pergunta" onfocus="this.placeholder=''" onblur="this.placeholder='Digite a pergunta'">
    <input type="text" placeholder="Texto para dissertação" onfocus="this.placeholder=''" onblur="this.placeholder='Texto para dissertação'">
</div>`;
//Alternando o layout, conforme a escolha do usuário, entre Dissertativa e Multipla escolha 
var checkbox = document.querySelector('.checkbox');
var options = checkbox.querySelectorAll('li');
options.forEach(function(option) {
    option.addEventListener('click', function() {
        var selectedOption = this.getAttribute('data-value');
        if (selectedOption === "option2") { 
            // Alterando o layout para a opção Multipla Escolha
            document.getElementById('left-column').innerHTML = `
                <div class="input-box">
                    <input type="text" placeholder="Digite a pergunta" onfocus="this.placeholder=''" onblur="this.placeholder='Digite a pergunta'">
                </div>
                <div class="multipla-escolha-container">
                    <input type="radio" name="multipla-escolha-radio" value="option1" id="multipla-escolha-radio">
                    <input type="text" id="text-multipla-escolha" placeholder="Opção 1"></input>
                    <i class="fa-solid fa-circle-plus"></i>
                </div>`;
        } else { // Se a opção for Dissertativa
            // Muda para o layout de dissertativa
            document.getElementById('left-column').innerHTML = `
                <div class="input-box">
                    <input type="text" placeholder="Digite a pergunta" onfocus="this.placeholder=''" onblur="this.placeholder='Digite a pergunta'">
                    <input type="text" placeholder="Texto para dissertação" onfocus="this.placeholder=''" onblur="this.placeholder='Texto para dissertação'">
                </div>`
        }
    });
});


//CheckBox
var checkbox = document.querySelector('.checkbox');
var selectedOption = checkbox.querySelector('.selected-option');
var optionsList = checkbox.querySelector('.options');
var options = checkbox.querySelectorAll('.options li');

//Função para fechar e abrir a checkbox
selectedOption.addEventListener('click', function() {
    optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
});

// Função para lidar com as opções dentro de uma lista de opções.
// Quando uma opção é clicada, o ícone selecionado é clonado e exibido ao lado do texto da opção selecionada,
// e a lista de opções é ocultada.
options.forEach(function(option) {
    option.addEventListener('click', function() {
        var selectedIcon = option.querySelector('i').cloneNode(true);
        
        selectedOption.innerHTML = '';
        selectedOption.appendChild(selectedIcon);
        selectedOption.insertAdjacentHTML('beforeend', '<span>' + option.textContent + '</span><i class="fa-solid fa-chevron-down"></i>');
        
        optionsList.style.display = 'none';
    });
});

// Função para fechar a lista de opções quando o usuário clica fora dela
document.addEventListener('click', function(e) {
    if (!checkbox.contains(e.target)) {
        optionsList.style.display = 'none';
    }
});

//Função para alternar o icone, de escolha entre obrigatório ou não.
document.getElementById('toggle-icon').addEventListener('click', function() {
    var icon = document.getElementById('icon');
    // Verifica se o ícone está atualmente como "fa-toggle-off"
    if (icon.classList.contains('fa-toggle-off')) {
        // Se estiver como "fa-toggle-off", muda para "fa-toggle-on"
        icon.classList.remove('fa-toggle-off');
        icon.classList.add('fa-toggle-on');
        document.getElementById('toggle-icon').classList.remove('toggle-off');
        document.getElementById('toggle-icon').classList.add('toggle-on');
    } else {
        // Se estiver como "fa-toggle-on", muda para "fa-toggle-off"
        icon.classList.remove('fa-toggle-on');
        icon.classList.add('fa-toggle-off');
        document.getElementById('toggle-icon').classList.remove('toggle-on');
        document.getElementById('toggle-icon').classList.add('toggle-off');
    }
});