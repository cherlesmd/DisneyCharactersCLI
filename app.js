const superagent = require('superagent');
const api = require('./api.js'); 

const charcterInformation = async(args) => {
    const characterName = args; 
    const findChar = await api.characterByName(characterName); 
    
    
}; 

module.exports = {
    charcterInformation
};

charcterInformation('Lilo');

// search prompt
const prompts = require('prompts'); 
// select from the list of characters based on their input
const _selectCharacterPrompt = async (characters) => {
    const displayCharacter = character.map((character) => {
        return {name : `${character.name}`}
    });

    return await prompts([
        {
            type: 'multiselect',
            name: 'characters',
            message: 'Select character',
            validate:(selected) => {
                const maxSelection = 1;
                if (selected.length > maxSelection){
                    return `You may only select up to ${maxSelection} character`;
                }
                else{
                    return true;
                }
            }
        }
    ])

};