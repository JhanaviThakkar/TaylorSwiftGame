const csv = require('csvtojson');
const Path = require('path');

const csvFilePath = Path.join(__dirname,"taylor_swift_lyrics.csv")

const randomSong = async (req, res) => {
    console.log(__dirname)
    const songsArray = await csv().fromFile(csvFilePath);
    const randomSong = songsArray[Math.floor(Math.random() *songsArray.length)]
    return res.status(200).json({randoSong: randomSong});
}

module.exports = {
    randomSong,
};