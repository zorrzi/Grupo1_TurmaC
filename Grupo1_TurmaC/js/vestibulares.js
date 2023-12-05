document.addEventListener('DOMContentLoaded', function () {
function redirecionarParaBuscar() {
    var textoDigitado = document.getElementById("campoBusca").value;

    if (textoDigitado.trim() !== "") {
      
      localStorage.setItem('termoBusca', textoDigitado);
      window.location.href = "buscar.html";
    }
  }
  
  document.getElementById("buscarLink").addEventListener("click", redirecionarParaBuscar);
  
    document.getElementById("campoBusca").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
        redirecionarParaBuscar();
        }
    });
});