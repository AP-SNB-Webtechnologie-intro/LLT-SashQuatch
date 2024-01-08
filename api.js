const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {

    const allGames = JSON.parse(this.responseText);

    const shuffledGames = shuffle(allGames);

    // Display only 5 random games
    const randomGames = shuffledGames.slice(0, 5);

    const gameTableBody = document.getElementById("gameTableBody");

    randomGames.forEach(game => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${game.title}</td>
        <td>${game.genre}</td>
        <td>${game.platform}</td>
        <td>${game.publisher}</td>
        <td>${game.developer}</td>
        <td>${game.release_date}</td>
      `;
      gameTableBody.appendChild(row);
    });
  }
});

xhr.open('GET', 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter');
xhr.setRequestHeader('X-RapidAPI-Key', '070c28b493msh1f10b494c1c9ec2p193d69jsnb30f553826de');
xhr.setRequestHeader('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');
xhr.send(data);

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}