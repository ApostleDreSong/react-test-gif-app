import axios from 'axios';

it('should return gifsdata', () => {
	axios
		.get(`https://api.giphy.com/v1/gifs/search?q=frog&api_key=QowsD5SieJdG8UlGAxisfSMQ9sk8ytrV&limit=1&offset=0`)
		.then(data => {
			let gifs = data.data;
			expect(Array.isArray(gifs) && gifs.length).toEqual(true);
		});
});
