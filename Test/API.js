fetch("https://www.freetogame.com/api/games?category=shooter", {
  "method": "GET"
})
.then(response => {
  console.log(response);
  console.log(response.content);
})
.catch(err => {
  console.log(err);
});