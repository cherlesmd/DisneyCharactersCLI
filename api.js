const superagent = require('superagent'); 
const baseURL = 'https://api.disneyapi.dev'; 

const characterByName = async(name) => {
    try{
        // if statement that if it has a space in the middle of the name then add %20
        // we need to figure out if the name has a space? because we need to convert to %20
        const filterURL = `${baseURL}/character?name=${name}`; 
        // console.log(filterURL); 

        const res = await superagent.get(filterURL); 

        // shows us the information about what the characers are associated with. 
      
        // this is how we are able to get all the data inside the json file
        const films = res.body.data.map(data => data['films']);
        // shortFilms, tvShows, videoGames, parkAttractions, allies, enemies, imageUrl, url, 

        
        console.log(res.body.data); 
        return res.body.data;
    }
    catch(error){
        console.log(error); 
    }
    
};  

module.exports = {
    characterByName
}