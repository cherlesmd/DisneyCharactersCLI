const yargs = require('yargs/yargs');
const process = require('process');

const app = require('./app.js'); 

    yargs(process.argv.slice(2))
        .usage('$0 : Usage <command> [optional]')
        .command('search <firstName> [lastName]', 
        'return character\'s information (ex. films, tv shows, video games) based on input', 
        (yargs) => {
            // positional can take required and optional arguments
            return yargs
            .positional('firstName', {
                describe: 'first or only name of the character', 
                // what about those character with number names?
                type: 'string', 
            })
            .positional('lastName', {

                describe: 'last name of the character if they have one (not required)', 
                // what about those character with number names?
                type: 'string', 
            })

        }, 
        (args) => {
            // this gets the charcter's name
            // can put some if statements that if no last name do not add. 
            if(args.lastName !== undefined){
                const fullName = args.firstName + '%20' + args.lastName; 
                app.charcterInformation(fullName)
                // console.log(fullName);
                // console.log(args); 

            }
            else{
                app.charcterInformation(args.firstName);
            };  

        }
        // when they need help
        ).help().argv;  





