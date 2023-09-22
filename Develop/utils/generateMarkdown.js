// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    let convertLic = `${license}`.replaceAll(/ /g, "_");
    return `![Static Badge](https://img.shields.io/badge/LICENSE-${convertLic}-purple)`
  }
  else { return ''; }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) { return `- [License](#license)` } else { return '' }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) { return `## License 
  ${license}` } else { return '' }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `${renderLicenseBadge(response.license)}

  # ${response.title}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${renderLicenseLink(response.license)}
  - [Questions](#questions)

  ## Description

  ${response.description}

  ## Installation

  ${response.installation}

  ## Usage
  
  ${response.usage}
  
  ## Contributing
  
  ${response.contributing}
  
  ## Tests
  ${response.tests}
  
  ${renderLicenseSection(response.license)}
  
  ## Questions
  
  Contact me here with any questions
  - [Github](https://github.com/${response.github})
  - Email: ${response.email}
`;
}

module.exports = generateMarkdown;
