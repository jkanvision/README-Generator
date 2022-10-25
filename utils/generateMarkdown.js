// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  <br>

  ${renderBadge()};

  ## Description: 
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink()}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  <br>

  ## Installation:
  To install necessary dependencies, run the following command:
  > ${data.installation}
  <br>

  ## Usage:
  ${data.usage}
  <br>

  ${renderLicenseSection()}
  ## Contributing:
  ${data.contribution}
  <br>

  ## Tests:
  To run tests, run the following command:
  > ${data.test}
  <br>

  ## Questions:
  If you have questions about this project, please contact me at ${data.email}. You can view my other projects by visiting my GitHub profile: ${data.github}.`;
};

// Creates a function that returns a license badge
// If there is no license, returns an empty string
renderBadge = function(answers) {
  switch(answers) {
    case "MIT":
      response = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      return response;
      break;
    case "APACHE":
      response `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      return response;
      break;
    case "BSD":
      response `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      return response;
      break;
    case "GPL":
      response `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      return response;
      break;
    case "none":
      response = ""
      return response;
      break;
   };
    
};

// Creates a function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(answers) {
  if (answers === "none") {
    return "";
  } else {
    return `- [License](#license)`;
  }
};

// Creates a function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(answers) {
  if (answers === "none") {
    return "";
    } else {
      return `## License:
      This project is licensed under the ${answers} license.
      <br>
    
    `;
  }
};

module.exports = generateMarkdown;
