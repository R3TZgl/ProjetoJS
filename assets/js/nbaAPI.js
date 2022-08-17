const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '63c53d3747msh519bebbba54140dp1225b1jsnd87ea2611268',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));