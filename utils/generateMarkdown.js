// Creates a function that returns a license badge
// If there is no license, returns an empty string
renderBadge = function(answers) {
  switch(answers.license) {
    case "MIT":
      response = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      return response;
      
    case "APACHE 2.0":
      response = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      return response;
      
    case "BSD 3":
      response = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      return response;
      
    case "GPL 3.0":
      response
      = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      return response;
      
    case "none":
      response = ""
      return response;
      
   };
    
};

// Creates a function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(answers) {
  if (answers.license === "none") {
    response = ""
    return response;
  } else {
    return `- [License](#license)`;
  }
};

// Creates a function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(answers) {
  if (answers.license === "none") {
    response = ""
    return response;
    } else {
      return `## License:
      This project is licensed under the ${answers.license} license.

    `;
  }
};

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderBadge(data)}
  
  # ${data.project}
  <br>

  

  ## Description: 
  ${data.description}
  &nbsp;
  &nbsp;

  &nbsp;
  &nbsp;
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  <br>

  &nbsp;
  &nbsp;
  ## Installation:
  To install necessary dependencies, run the following command:
  > ${data.installation}
  

  &nbsp;
  &nbsp;
  ## Usage:
  ${data.usage}
  &nbsp;
  &nbsp;

  &nbsp;
  &nbsp;
  ${renderLicenseSection(data)}
  &nbsp;
  &nbsp;

  ## Contributing:
  ${data.contribution}
  &nbsp;
  &nbsp;

  &nbsp;
  &nbsp;
  ## Tests:
  To run tests, run the following command:
  > ${data.test}
  &nbsp;
  &nbsp;
  
  &nbsp;
  &nbsp;
  ## Questions:
  If you have questions about this project, please contact me at [${data.email}](mailto:${data.email}). You can view my other projects by visiting my GitHub profile: [${data.github}](${data.github}).`;
};


module.exports = generateMarkdown;
