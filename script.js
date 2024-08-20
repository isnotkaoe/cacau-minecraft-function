const cacauAnimacao = document.querySelector('.cacau-animacao img');

cacauAnimacao.addEventListener('mouseover', () => {
  cacauAnimacao.style.animation = 'cacau-shake 0.5s infinite alternate';
});

cacauAnimacao.addEventListener('mouseout', () => {
  cacauAnimacao.style.animation = 'none';
});
