// filtro.js

document.addEventListener("DOMContentLoaded", function () {
    // Função para abrir o modal de filtro
    document.getElementById('iconeFiltro').addEventListener('click', function () {
      abrirModalFiltro();
    });
  
    // Fechar o modal de filtro
    document.getElementById('fecharModal').addEventListener('click', function () {
      fecharModalFiltro();
    });
  
    // Aplicar filtro
    document.getElementById('aplicarFiltro').addEventListener('click', function () {
      aplicarFiltro();
      fecharModalFiltro();
    });
  });
  
  // Função para abrir o modal de filtro
  function abrirModalFiltro() {
    document.getElementById('filtroModal').style.display = 'block';
  }
  
  // Função para fechar o modal de filtro
  function fecharModalFiltro() {
    document.getElementById('filtroModal').style.display = 'none';
  }
  
  // Função para aplicar filtro (Exemplo básico)
  function aplicarFiltro() {
    const status = document.getElementById('statusFiltro').value;
    const data = document.getElementById('dataFiltro').value;
    const categoria = document.getElementById('categoriaFiltro').value;
  
    const casos = [
      { id: 1, nome: 'Caso A', status: 'aberto', categoria: 'criminal', data: '2025-04-01' },
      { id: 2, nome: 'Caso B', status: 'fechado', categoria: 'civil', data: '2025-03-15' },
      { id: 3, nome: 'Caso C', status: 'aberto', categoria: 'odontologico', data: '2025-04-10' }
    ];
  
    const resultados = casos.filter(caso => {
      const statusMatch = status === 'todos' || caso.status === status;
      const categoriaMatch = categoria === 'todos' || caso.categoria === categoria;
      const dataMatch = !data || caso.data === data;
      return statusMatch && categoriaMatch && dataMatch;
    });
  
    const mainContent = document.getElementById('main');
    mainContent.innerHTML = ''; 
    if (resultados.length > 0) {
      resultados.forEach(caso => {
        mainContent.innerHTML += `<p>${caso.nome} - ${caso.status} - ${caso.categoria} - ${caso.data}</p>`;
      });
    } else {
      mainContent.innerHTML = "<p>Nenhum caso encontrado com o filtro.</p>";
    }
  }
  