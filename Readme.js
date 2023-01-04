class createReadme {
        static generateReadme(answers){
        return `
# ${answers.title}
    
## Table of Contents
- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Tests](#Tests)
- [Questions](#Questions)
- [Contribution](#Contribution)
    
## Description
${answers.description}


Link to Markdown, read the GitHub guide on [Mastering Markdown](https://www.markdownguide.org/basic-syntax/). Also to npm [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).


## Installation
 ${answers.Installation}
 
## Usage
${answers.Usage}
    
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
    
## Tests
${answers.Test}

## Questions
Should you have any questions you can get in touch with me on ${answers.email} and https://github.com/Bamidele100.

## Contribution
${answers.Contribution}

## Generated images
![alt text](./images/image1.png)
![alt text](./images/image2.png)
`
}
}






module.exports = createReadme
  
  