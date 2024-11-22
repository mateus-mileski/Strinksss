// Função para alternar o menu lateral
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('show');
}

// Exibir/ocultar o menu lateral ao clicar no botão de menu
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

// Controle de rolagem para mostrar o botão "Voltar ao Início"
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Função para fechar o menu se o clique for fora dele
document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('side-menu');
    const menuButton = document.getElementById('menu-toggle');
    
    // Fechar o menu apenas se o clique não for no menu nem no botão
    if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
        sideMenu.classList.remove('show'); // Remove a classe 'show' se clicar fora
    }
});

const feedback = document.getElementById('feedback');

emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    btn.value = 'Send Email';
    feedback.classList.add('success');
    feedback.innerText = 'Your message has been sent!';
    feedback.style.display = 'block';
  }, (err) => {
    btn.value = 'Send Email';
    feedback.classList.add('error');
    feedback.innerText = 'There was an error: ' + JSON.stringify(err);
    feedback.style.display = 'block';
  });

