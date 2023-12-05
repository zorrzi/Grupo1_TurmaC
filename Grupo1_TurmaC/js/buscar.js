document.addEventListener('DOMContentLoaded', function () {
    var termoBusca = localStorage.getItem('termoBusca');
    document.getElementById('termoBusca').innerText = termoBusca || 'USP - Econo';

});


