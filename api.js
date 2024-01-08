 // Functie om de API-gegevens op te halen en weer te geven
 async function fetchData() {
    try {
        const response = await fetch('https://www.freetogame.com/api/games?category=shooter');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Fout bij het ophalen van API-gegevens:', error);
    }
}

// Functie om alleen de game-URL's weer te geven
function displayData(data) {
    const apiDataDiv = document.getElementById('apiData');

    // Itereer over de games en voeg de URL's toe aan de pagina
    data.forEach(game => {
        const gameDiv = document.createElement('div');
        const gameUrl = document.createElement('p');
        gameUrl.innerHTML = `<a href="${game.game_url}" target="_blank">${game.game_url}</a>`;
        gameDiv.appendChild(gameUrl);
        apiDataDiv.appendChild(gameDiv);
    });
}

// Roep de fetchData-functie aan wanneer de pagina is geladen
window.onload = fetchData;