const form = document.getElementById('cadastroForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    document.getElementById('mensagem').textContent = "Bem vindo, " + nome + "! Seu cadastro foi realizado."
});
