## Setup
### Install Dependencies
If running NPM v4 through v6:
````
npm install
````
If running NPM v7:
````
npm install --legacy-peer-deps
````

NPM v7 installs peer dependencies by default which will oftentimes
lead to version conflicts, thus breaking the installation process.

### Run the Project
After following the above steps:
````
npm run dev
````
Then navigate to the project in the browser via `http://localhost:3000`

Alternatively, for production builds:
````
npm run build
````
````
npm run start
````
Then navigate to the project in the browser via `http://localhost:3000`

This project is also hosted on [Netlify](https://ct-assessment.netlify.app).

## Storybook
To view Storybook in the browser:
````
npm run storybook
````

Alternatively, you can view this on [GitHub Pages](https://naxes.github.io/CarTrawler-Assessment/).
