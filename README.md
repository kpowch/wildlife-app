# Wildlife App
This app is to aid people in recording wildlife data. We will eventually make a mobile app so it can be used in the backcountry where cellular data is spotty or unavailable.

## Getting Started
These instructions will get the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live stream.

### Prerequisites
This app was written using OS X El Capitan and Chrome. It has not been tested in any other environments yet.

The following is a list of required software, and how to install them:

```
yarn
node (v7.9.0)
```

### Folder/File Breakdown
* `server/`: contains files associated with the back-end (node).
* `server/server.js`: runs node server using Express.

* `web/`: contains files associated with the front-end (react).
* `web/webpack.config.js`: runs the webpack server.
* `web/src/`: contains source files like html, js, etc.
* `web/src/assets/index.html`: single html file where all react components get mounted
* `web/src/js/`: contains all js files.
* `web/src/js/index.js`: ???
* `web/src/js/router.js`: ???
* `web/src/js/components/`: contains js reusable component files - like buttons, lists, etc.
* `web/src/js/routes/`: contains route files.

* `.env.default` and `.env`: `.env.default` is an empty copy of `.env` to hold environment variables to set application execution parameters.

* `.gitignore`: contains files that shouldn't be commited to github.

* `.babelrc`: config file for ES6.

* `.eslintrc`: config file for linting. `parser` is to set up eslint; `plugins` set to react; `extends` extends the standard js style.
> Note: this linter doesn't like semicolons, and it will correct some changes upon saving the document.

* `package.json`: contains all dependencies for the back- or front-end.

### Installing
`yarn` (or `npm install`) must be run in both the `server` and `web` directories  as they both contain different `package.json` files with the necessary dependencies. This should create `node_modules` directories.

Copy the `.env.default` folder and rename it `.env`. Fill in all lines with appropriate values.

### Running the App
You must start both the server and the webpack server. This is done by running `yarn start` in both the `server` and `web` directories, in separate terminal windows/tabs. Nodemon will restart the server if any server files are modified and saved. View the app once the webpack server is running at [http://0.0.0.0:8080/](http://0.0.0.0:8080/).

## Running Tests
Automated tests for the system can be run as followed:

```
Eventually we should add tests and put directions here
```

### Test Breakdown
Explain what the tests test and why

## Deployment
Add notes about to how to deploy this on a live system

## Built With
* [yarn](https://yarnpkg.com/en/) - fast, reliable, and secure dependency management (instead of `npm`).
* [nodemon](https://nodemon.io/) - monitors for changes in source and automatically restarts server upon save.

* [lodash](https://lodash.com/) - js utility library delivering modularity, performance, and extras.

## Authors

## Acknowledgments
* Inspired by Parks Canada and... their data management stuff and things
* etc.
