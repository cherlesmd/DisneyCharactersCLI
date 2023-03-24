const fs = require("fs");
const data = require("./data.json");


// save previous queries
// count how many results per query
// in the form of an array of objects -  key "search" and the key "resultCount"


const saveSearch = (searchName, results) => {

    const resultCount = results.length;

    fs.writeFile("data.json", JSON.stringify(`{${searchName}: ${resultCount}}`), (error) => {
        if (error) throw error;
        console.log("Done wrting...");
    });

    // const newData = {
    // };
};

module.exports = {
    saveSearch
};