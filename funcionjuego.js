// Función de búsqueda dinámica
document.getElementById('searchBar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const games = document.querySelectorAll('.game-card');

    games.forEach(game => {
        const title = game.querySelector('.game-title').textContent.toLowerCase();
        game.style.display = title.includes(query) ? 'block' : 'none';
    });
});
