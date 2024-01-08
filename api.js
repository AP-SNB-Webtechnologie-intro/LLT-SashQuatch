const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://esport-matches.p.rapidapi.com/tournament/1',
  headers: {
    'X-RapidAPI-Key': '17fdfafc83mshb4ad8cc3f745875p1146eejsnba0147bcd16b',
    'X-RapidAPI-Host': 'esport-matches.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}