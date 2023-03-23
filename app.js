const superagent = require('superagent');
const prompts = require('prompts'); 
const api = require('./api.js'); 

//gets characters information based on argument, runs a prompt after searching to select character.
const characterInformation = async(args) => {
    const characterName = args; 
    const findChar = await api.getWithQuery(characterName);
    // let choices = _selectCharacterPrompt(findChar);

    // returns the data of the selected character
    const selectedChar = await _selectCharacterPrompt(findChar);
    
    const idk = filterData(selectedChar); 

}; 

const dataInformation = async(args) => {
    const characterData = args;
    const findData = await api.getWithId(characterData);
    return findData; 
}


const filterData = async (data) => {
    const name = data.name;
    console.log("\nName: " + name);

    // films
    const film = data.films; 
    if(film[0] == null){
        console.log("\nFilms: None ")
    }
    else{
        console.log("\nFilms: ")
        film.forEach((f) => {
        console.log("•" + f); 
    }) 
    }
    // short films
    const shorts = data.shortFilms; 
    if(shorts[0] == null){
        console.log("\nShort Films: None ")
    }
    else{
        console.log("\nShort Films: ")
        shorts.forEach((f) => {
        console.log("•" + f); 
    }) 
    }
    // tv shows
    const shows = data.films; 

    if(shows[0] == null){
        console.log("\nTV Shows: None ")
    }
    else{
        console.log("\nTV Shows: ")
        shows.forEach((f) => {
        console.log("•" + f); 
    }) 
    }
    // video games
    const games = data.videoGames; 

    if(games[0] == null){
        console.log("\nVideo Games: None ")
    }
    else{
        console.log("\nVideo Games: ")
        games.forEach((f) => {
        console.log("•" + f); 
    }) 
    }
    // park attractions
    const park = data.parkAttractions; 

    if(park[0] == null){
        console.log("\nPark Attractions: None ")
    }
    else{
        console.log("\nPark Attractions: ")
        park.forEach((f) => {
        console.log("•" + f); 
    }) 
    }
    // allies
    const allies = data.allies; 

    if(allies[0] == null){
        console.log("\nAllies: None ")
    }
    else{
        console.log("\nAllies: ")
        allies.forEach((f) => {
        console.log("•" + f); 
    }) 
    }
    // enemies
    const enemies = data.enemies; 

    if(enemies[0] == null){
        console.log("\nEnemies: None ")
    }
    else{
        console.log("\nEnemies: ")
        enemies.forEach((f) => {
        console.log("•" + f); 
    }) 
    }
}; 


// console.log(dataInformation("donald"));


// search prompt
// select from the list of characters based on their input
const _selectCharacterPrompt = async (characters) => {
    const displayCharacter = characters.map((character) => {
        return {title : `${character.name}`, value: character._id}
    });


    const response = await prompts([
        {
            type: 'select',
            name: 'characters',
            message: 'Select character',
            choices: displayCharacter,
        }
    ]);
    // console.log(response.characters[0])
    //displays data for character
    // console.log(dataInformation(response.characters));
    return dataInformation(response.characters); 

};

module.exports = {
    characterInformation
};