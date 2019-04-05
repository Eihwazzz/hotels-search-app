const jsonData = require('./functions/getData')
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
var data = jsonData.getData();

	
app.use(cors());
app.options('*', cors());

app.get('/api/hotels', (req, res) => {
	if(data && data != 'FNF' && data != 'ERROR'){
		var dataParsed = JSON.parse(data);
		if(req.query.name){
			const hotels = dataParsed.filter(hotel => hotel.name.toLowerCase().match(req.query.name.toLowerCase()));
			res.send(hotels);
		}else if(req.query.stars){
			if(req.query.stars == 0){
				res.send(dataParsed);
			}else{
				const hotels = dataParsed.filter(hotel => hotel.stars == req.query.stars);
				res.send(hotels);
			}
		}else{
			res.send(dataParsed);
		}
	}else{
		res.status(404).send('No data available');
	}
});


app.listen(port, () => console.log('Listening on port ' + port));