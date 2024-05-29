document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

//Função para alternar o icone, de escolher entre aceitar respostas anônimas ou não.
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