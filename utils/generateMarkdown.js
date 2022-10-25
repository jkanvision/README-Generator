// Creates a function that returns a license badge
// If there is no license, returns an empty string
function renderLicenseBadge() {
  switch (answers) {
    case license==="MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "APACHE 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "BSD 3":
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "GPL 3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "none":
      return "";
      break;
  // ![License Badge](https://img.shields.io/badge/license-${data.license}-success?style=plastic)
  };
    
};

// Creates a function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink() {
  if (license === "none") {
    return "";
  } else {
    return `- [License](#license)`;
  }
};

// Creates a function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection() {
  if (license === "none") {
    return "";
    } else {
      return `## License:
      This project is licensed under the ${license} license.
      <br>
    
    `;
  }
};


// Creates a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, test, github, email}) {
  renderLicenseBadge();
  return `# ${title}
  <br>

  ## Description: 
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage);
  ${renderLicenseLink()}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  <br>

  ## Installation:
  To install necessary dependencies, run the following command:
  > ${installation}
  <br>

  ## Usage:
  ${usage}
  <br>

  ${renderLicenseSection()}
  ## Contributing:
  ${contribution}
  <br>

  ## Tests:
  To run tests, run the following command:
  > ${test}
  <br>

  ## Questions:
  If you have questions about this project, please contact me at ${email}. You can view my other projects by visiting my GitHub profile: ${github}.`;
};

module.exports = generateMarkdown;
