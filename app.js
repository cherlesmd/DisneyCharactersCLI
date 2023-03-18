const api = require('./api.js'); 

const charcterInformation = async(args) => {
    const characterName = args; 
    const findChar = await api.characterByName(characterName); 
    
}; 

module.exports = {
    charcterInformation
};

// search prompt
// const prompts = require('prompts'); 
// // select from the list of characters based on their input
// const _selectCharacterPrompt = async (characters) => {
//     const displayCharacter = character.map((character) => {
//         return {name : ${character.name}}
//     })
// }