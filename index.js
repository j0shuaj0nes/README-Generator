// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation guideline, if any',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how your app is used',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List all credits',
        },
        {
            type: 'input',
            name: 'license',
            message: 'what is the license of your app?' 
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How to contribute',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are there any tests for this project?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
    ])
    .then((answers) => {
        //const htmlPageContent = generateHTML(answers);

        fs.writeFile('README.md', `
# ${answers.title}

## Description

${answers.description}

## Table of Contents (Optional)

- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## License

${answers.license}


## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


## Installation

${answers.installation}


## Usage

${answers.usage}


## Credits

${answers.credits}


## How to Contribute

${answers.contribution}


## GitHub 

[${answers.github}](https://github.com/${answers.github})


## Questions

If you have any questions, you can reach me at this ${answers.email} email address.



## Tests

${answers.tests}
    `, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });





