// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  "MIT"; "[![License: MIT] (https://img.sheields.io/badge/License-MIT-blue.svg)]",
  "GNU"; "[![License: GNU] (https://img.shields.io/badge/License-GNU-green.svg)]",
  "Unlicense"; "[![License: Unlicense] (https://img.shields.io/badge/License-Unlicense-yellow.svg)]"
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  "MIT"; "[![License: MIT] (https://opensource.org/licenses/MIT)",
  "GNU"; "[![License: GNU] (https://opensource.org/licenses/GPL-3.0)]",
  "Unlicense"; "[![License: Unlicense] (https://unlicense.org/)]"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Features](#feature)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)

## Installation

What are the steps required to install your project?

\`
${data.installation}
\`

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}

## Badges

${data.renderLicenseBadge}

## Features

${data.features}

## Contributing

${data.contributing}

## Tests
 \`
${data.test}
\`

## Questions

Questions about this repository, please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHun at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
