 const { randomSong } = require('./song.js');
 const express = require ('express');


 const app = express();

 const cors = require('cors');
 const corsOptions ={
     origin:'http://localhost:3001', 
     credentials:true,            //access-control-allow-credentials:true
     optionSuccessStatus:200
 }
 app.use(cors(corsOptions));

 app.get('/', (req,res) => {
    res.status(200).send({
		message: "Welcome to Taylor Swift Challenge",
	});
 });

 //endpoint that will call randomSong() function in song.js
 app.get('/random', randomSong);


app.listen(3000, () => console.log('Listening on port 3000 . . .'));