// Create a license badge based on which license is selected
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    let convertLic = `${license}`.replaceAll(/ /g, "_");
    return `![Static Badge](https://img.shields.io/badge/LICENSE-${convertLic}-purple)`
  }
  else { return ''; }
}

// Create license section link in table of contents
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) { return `- [License](#license)` } else { return '' }
}

// Create the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) { return `## License 
  ${license}` } else { return '' }
}

// Generate markdown template for README with data created by inquirer prompts
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  
  Contact me here with any questions
  - [Github](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

// Export generateMarkdown function
module.exports = generateMarkdown;
