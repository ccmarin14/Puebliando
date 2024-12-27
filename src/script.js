const grid = document.getElementById('grid');

async function fetchPueblos() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/ccmarin14/dc55c783898e6548cfdaaea571dfe2b3/raw/b0c5b13ff917ae142f5ca98c984cfb9c0431a76f/pueblos.json');
    const pueblosData = await response.json();
    renderGrid(pueblosData);
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}

function renderGrid(pueblosData) {
  pueblos = pueblosData.pueblos;
  grid.innerHTML = '';
    pueblos.forEach((pueblo, index) => {
    const item = document.createElement('div');
    item.className = `grid-item ${pueblo.visitado ? 'visited' : ''}`;
    item.textContent = pueblo.nombre;
    item.addEventListener('click', () => {
      pueblo.visitado = !pueblo.visitado;
      item.classList.toggle('visited');
    });
    grid.appendChild(item);
  });
}

fetchPueblos();