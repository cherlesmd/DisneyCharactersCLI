const superagent = require('superagent');
const base = 'https://api.disneyapi.dev';

const getWithId = async (id) => {
    try {
        const charUrl = `${base}/characters/${id}`;
        const res = await superagent.get(charUrl);

        return res.body;
    } catch (error) {
        console.log(error);
    }
};

const getWithQuery = async (query) => {
    try {
        const charUrl = `${base}/character?${query}`;
        const res = await superagent.get(charUrl);

        return res.body;
    } catch (error) {
        console.log(error);
    }
};

const logCharacter = async () => {
    try {
        const getBody = await getWithId(308);

        console.log(getBody);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    logCharacter
};