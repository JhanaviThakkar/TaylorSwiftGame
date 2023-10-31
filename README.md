Jhanavi Thakkar
jhanavi.a.thakkar@vanderbilt.edu

# Details of Running the program
The main files of the project are the /backend/songs.js, /backend/server.js, and my-app/components/Game.js. The actual code for generating the random Song is in songs.js, and that endpoint in the server is in server.js. The actual game loop is in Game.js and calls on the server endpoint to get a random song.

# dependencies
To my knowledge: type 'npm i', in the terminal and it should intall the dependencies for the project. But if there are errors, npm install whatever package is needed to resolve the error.
Here are the different installations I did during the project : 
in backend: npm i csvtojson
            npm i express

in my-app: npm i axios
           npm i react

# starting the program
Create a terminal and type 'cd backend' and then type 'node server.js'
This will start the backend of the program.

Then create a new terminal and type 'cd my-app' and then type 'npm start'
This should launch the frontend and you should be taken to a local website.

# Code Reflection
The website has worked successfully on my end. However, I had a lot of trouble using axios to get a response from my backend. Especially the piece of code const response = await axios.get("http://localhost:3000/random");  in Game.js, would cause many errors due to some Access-Control-Allow-Origin error in which the access would be blocked to the server because the port numbers would not match. I am not sure exactly how I resolved the issue, but I tinkered around with the cors element. 

Additionally, I did not have enough time to learn all the different capabilities of React. I would have loved to improve the user interface and give it a cleaner look. I am happy though that I figured out how to make it not case sensitive.