document.addEventListener('DOMContentLoaded', function() {
    const appContainer = document.querySelector('main');
    const pokemon = document.createElement('img');
    pokemon.src = 'ref/duck.jpeg'; // Path to a Pokémon image
    pokemon.style.position = 'absolute';
    pokemon.style.width = '80px'; // Set image size
    pokemon.style.cursor = 'pointer';
    pokemon.setAttribute('title', 'Catch me!');

    pokemon.addEventListener('click', function() {
        alert('You caught me! Now you can download the app.');
        window.location.href = 'ref/pokemon-installer.zip'; // Direct download link
    });

    function movePokemon() {
        const maxX = appContainer.clientWidth - 50;
        const maxY = appContainer.clientHeight - 50;
        pokemon.style.left = Math.random() * maxX + 'px';
        pokemon.style.top = Math.random() * maxY + 'px';
    }

    setInterval(movePokemon, 2000); // Move the Pokémon every 2 seconds

    appContainer.appendChild(pokemon); // Add Pokémon to the main container
});
