const renderLicenseBadgeLinks = require("./licenseBadgeLinks");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

// url for licenses and badges
data.licenseBadgeLinks = renderLicenseBadgeLinks[data.license];

// content returned from user's input
  return `# ${data.title}

## Description 
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Features](#Features)
* [Contributing](#Contributing)
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

This repository is under the licenses of ${data.license}

${data.license}

## Badges

${data.licenseBadgeLinks}

## Features

${data.Features}

## Contributing

${data.Contributing}

## Tests

To run a test, use the following:

 \`
${data.test}
\`

## Questions

Questions about this repository, please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHun at [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
