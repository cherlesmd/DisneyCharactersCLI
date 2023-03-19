const superagent = require('superagent');
const prompts = require('prompts'); 
const api = require('./api.js'); 

//gets characters information based on argument, runs a prompt after searching to select character.
const characterInformation = async(args) => {
    const characterName = args; 
    const findChar = await api.characterByName(characterName);
    let choices = _selectCharacterPrompt(findChar);
}; 


// search prompt
// select from the list of characters based on their input
const _selectCharacterPrompt = async (characters) => {
    const displayCharacter = characters.map((character) => {
        return {title : `${character.name}`}
    });


    return await prompts([
        {
            type: 'multiselect',
            name: 'characters',
            message: 'Select character',
            choices: displayCharacter,
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
    ]);

};

module.exports = {
    characterInformation
};