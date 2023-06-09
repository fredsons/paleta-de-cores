// Seleciona os elementos HTML necessários
const generateButton = document.querySelector('#generate-button');
const colorsDiv = document.querySelector('.colors');

// Função para gerar cores aleatórias
function generateColors() {
  // Limpa o conteúdo da div de cores
  colorsDiv.innerHTML = "";

  // Gera e exibe 5 cores aleatórias
  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    const colorName = document.createElement('p');
    colorName.textContent = color;
    colorName.style.color = color;
    colorDiv.appendChild(colorName);
    colorsDiv.appendChild(colorDiv);
  }
}

// Função para gerar uma cor aleatória
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  // Gera um código de cor hexadecimal de 6 dígitos
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Adiciona um listener de evento de clique ao botão de geração de cores
generateButton.addEventListener('click', generateColors);
