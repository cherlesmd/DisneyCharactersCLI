const superagent = require('superagent');
const base = 'https://api.disneyapi.dev';

const getWithId = async (id) => {
    // https://api.disneyapi.dev/characters/308
    try {
        const charUrl = `${base}/characters/${id}`;
        const res = await superagent.get(charUrl);

        // returns character object with all detailed info
        return res.body;
    } catch (error) {
        console.log(error);
    }
};

const getWithQuery = async (query) => {
    // https://api.disneyapi.dev/character?name=Mickey%20Mouse
    try {
        const charUrl = `${base}/character?name=${query}`;
        const res = await superagent.get(charUrl);
        
        // returns array of all searches that match query
        return res.body.data;
    } catch (error) {
        console.log(error);
    }
};

const logCharacter = async () => {
    // for testing
    try {
        const getBody = await getWithId(308);
        const getQBody = await getWithQuery('Mickey Mouse');

        console.log(getBody);
        console.log(getQBody);
    } catch (error) {
        console.log(error);
    }
};

logCharacter();

module.exports = {
    getWithId,
    getWithQuery
};