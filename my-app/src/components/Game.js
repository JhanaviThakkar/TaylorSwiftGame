import React, { useState } from 'react'
const axios = require('axios').default;



function Game() {
    const [lyric, setLyric] = useState("He said the way my blue eyes shined");
    const [title, setTitle] = useState("Tim McGraw");
    const [answer, setAnswer] = useState("");
    const [message, setMessage] = useState("");
    const [correct, setCorrect] = useState(0);
    const [totalAttempts, setTotalAttempts] = useState(0);



    const getRandomLyric = async () => {
        const response = await axios.get("http://localhost:3000/random");

        console.log("response: ", response.data);
        setLyric(response.data.randoSong["lyric"]);
        setTitle(response.data.randoSong["track_title"]);
    }

    const incrementCorrect = () => {
        // Update state with incremented value
        setCorrect(correct + 1);
    }

    const incrementAttempts = () => {
        // Update state with incremented value
        setTotalAttempts(totalAttempts + 1);
    }

    return (
        <div>
            
            <center>
                <h1>Taylor Swift Lyrics Challenge</h1>
                <p>Try to guess the Song which the lyrics come from !</p>
                <p> Lyric: {lyric} </p>
                <input type="text" onChange={(e) => {
                    setAnswer(e.target.value)
                }} />

                <button onClick={() => {
                    incrementAttempts();
                    if (title.toLowerCase() === answer.toLowerCase()) {
                        setMessage("Right!");
                        incrementCorrect();
                    } else {
                        setMessage("Wrong!")
                    }
                }}>Submit</button>

                <button onClick={async () => {
                    await getRandomLyric()
                    setMessage("")
                }}>Get new lyric</button>

                <p>{message}</p>
                <p>Your answer: {answer}</p>
                <p>Game Stats [Total Correct/Total Attempts]: {correct} / {totalAttempts}</p>
            </center>


        </div>
    )
}

export default Game;