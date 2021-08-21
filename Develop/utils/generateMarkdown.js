// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  "MIT": "[![License: MIT] (https://img.sheields.io/badge/License-MIT-blue)]",
  "GNU": "[![License: GNU] (https://img.shields.io/badge/License-GNU-green)]",
  "Boost Software License 1.0":"[![License: BSL 1.0] (https://img.shields.io/badge/License-BoostSoftwareLicense-purple)]",
  "Mozilla Public License 2.0":"[![License: MPL 2.0] (https://img.shields.io/badge/License-MozillaPublicLicense2.0-orange)]",
  "Apache License 2.0":"[![License: Apache License 2.0] (https://img.shields.io/badge/License-ApacheLicense2.0-red)]",
  "Unlicense":"[![License: Unlicense] (https://img.shields.io/badge/License-Unlicense-yellow)]",
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  "MIT": "[![License: MIT] (https://opensource.org/licenses/MIT)",
  "GNU": "[![License: GNU] (https://opensource.org/licenses/GPL-3.0)]",
  "Mozilla Public License 2.0": "[![License: MPL 2.0] (https://opensource.org/licenses/MPL-2.0)]",
  "Apache License 2.0": "[![License: Apache License 2.0] (https://opensource.org/licenses/Apache-2.0)]"
  "Boost Software License 1.0": "[![License: BSL 1.0] (https://opensource.org/licenses/BSL-1.0)]"
  "Unlicense": "[![License: Unlicense] (https://unlicense.org/)]"
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

${data.badges}

## Features

${data.features}

## Contributing

${data.contributing}

## Tests

${data.test}
`;
}

module.exports = generateMarkdown;
