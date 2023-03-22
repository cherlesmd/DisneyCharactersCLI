const superagent = require('superagent');
const prompts = require('prompts'); 
const api = require('./api.js'); 

//gets characters information based on argument, runs a prompt after searching to select character.
const characterInformation = async(args) => {
    const characterName = args; 
    const findChar = await api.getWithQuery(characterName);
    // let choices = _selectCharacterPrompt(findChar);
    _selectCharacterPrompt(findChar);
    

    
}; 

const dataInformation = async(args) => {
    const characterData = args;
    const findData = await api.getWithQuery(characterData);
    console.log(findData);
}
// console.log(dataInformation("donald"));


// search prompt
// select from the list of characters based on their input
const _selectCharacterPrompt = async (characters) => {
    const displayCharacter = characters.map((character) => {
        return {title : `${character.name}`, value: character.name}
    });


    const response = await prompts([
        {
            type: 'multiselect',
            name: 'characters',
            message: 'Select character',
            choices: displayCharacter,
            validate:(selected) => {
                const maxSelection = 1;
                if (selected > 1){
                    return `You may only select up to ${maxSelection} character`;
                }
                else{
                    return true;
                }
            }
        }
    ]);
    // console.log(response.characters[0])
    //displays data for character
    console.log(dataInformation(response.characters));

};

module.exports = {
    characterInformation
};