document.addEventListener('DOMContentLoaded', function () {
// Função chamada quando o usuário clica em "Buscar"
function redirecionarParaBuscar() {
    var textoDigitado = document.getElementById("campoBusca").value;
  
    // Verifica se o campo de busca não está vazio antes de redirecionar
    if (textoDigitado.trim() !== "") {
      // Armazena o valor no localStorage
      localStorage.setItem('termoBusca', textoDigitado);
      window.location.href = "buscar.html";
    }
  }
  
  // Adiciona um ouvinte de evento para o link "Buscar"
  document.getElementById("buscarLink").addEventListener("click", redirecionarParaBuscar);
  
  // Adiciona um ouvinte de evento para a tecla Enter na caixa de texto
    document.getElementById("campoBusca").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
        redirecionarParaBuscar();
        }
    });
});