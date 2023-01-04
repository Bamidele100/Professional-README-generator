// // TODO: Include packages needed for this application

// const { default: inquirer } = require("inquirer")

let inquirer = require('inquirer');
const fs = require('fs');
let createReadme = require("./Readme");

let questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project Description?',
      
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Installation instructions?',
      
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What is the Usage?',
      
    },
    {
      type: 'list',
      name: 'License',
      choices: ["MIT", "ISC", "Apache","Boost Software"],
      message: 'Pick your License?',

      filter(val) {
        return val.toLowerCase();
      }
      
    },
    
    {
      type: 'input',
      name: 'Test',
      message: 'What is the Test?',
      
    },

    {
      type: 'input',
      name: 'email',
      message: 'For questions(email)?',
      
    },

    {
      type: 'input',
      name: 'Contribution',
      message: 'What is the Contribution?',
      
    },
  ]


  //   const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  //   fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
  //     err ? console.log(err) : console.log('Success!')
  //   );
  // });

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


function runQuery (){
  return inquirer.prompt(questions)
  .then((answers) =>{
    let create = createReadme.generateReadme(answers)
    // console.log(create);
    // return answers

        fs.writeFile("README.md", create, function (err) {
          if (err) {
            console.log("could not save file", err)
          } else {
            console.log("success: new README.md file generated")
          }
        }
    );
  })
  .catch((error) => {
    console.log(error);
  })
}

runQuery();


