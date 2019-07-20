# Graph Insights PKB Application
- - -
This is the code for the desktop application _Insights_. It is built using Electron, React, Redux, and Neo4J.
For information on the architecture and general design see the [design doc](https://samuelholloway.com/graph-insights/).

## Getting Started with Development
### Prerequisites 
I develop on a Mac, so all instructions are for that platform. I use Homebrew for managing installs and NVM for working with Node.js.
1. Install [Homebrew](https://brew.sh/).
2. Install [NVM](https://github.com/nvm-sh/nvm) with brew.
```shell
brew install nvm
```
3. With NVM, install Node.js 12.0.0 (same version as Electron) and switch to that.
```shell
nvm install 12.0.0
nvm user 12.0.0
```

### Work with the Code Base
1. Get the code.
```shell
git clone https://github.com/sholloway/graph-insights.git
```
2. Switch to the active development branch (e.g. v0.0.1)
```shell 
git checkout v0.0.1
```
3. Install the projects NPM dependencies.
```shell
cd ./application
npm install
```
4. Run the mocked (no Neo4J integration) unit tests.
```shell
npm test
```

### Run the App in Development Mode
1. Build the app via Webpack.
```shell
npm run build
```
2. Start the app.
```shell
npm start
```

### NPM Tasks
| Task            | Description                                                                | Run Command             | 
|-----------------|----------------------------------------------------------------------------|-------------------------|
| build           | Builds the application that enables it to run as an Electron App.          | npm run build           | 
| start           | Starts the app.                                                            | npm start               | 
| test            | Runs the mocked unit tests.                                                | npm test                |
| storybook:start | Starts the Storybook.js application for doing React component development. | npm run storybook:start |
| docs:code       | Generates the code documentation via JSDocs.                               | npm run docs:code       |

## Related Resources
### Electron
* [Electron](http://electron.atom.io)

### React
* [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)
* [React.js](https://facebook.github.io/react/index.html)
* [Thinking in React](http://facebook.github.io/react/docs/thinking-in-react.html)
* [Top Level API (Global)](https://facebook.github.io/react/docs/top-level-api.html)
* [Component API (Class)](https://facebook.github.io/react/docs/component-api.html)
* [Component Lifecycle (Class Methods)](https://facebook.github.io/react/docs/component-specs.html)
* [Component Lifecycle (Diagrams)](http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/)
* [React Components](http://react-components.com/)

### Testing
* [Sinon Mocks](http://sinonjs.org/)
* [Chai Tests](http://chaijs.com/)

### Redux
* [Github](https://github.com/reactjs/redux)
* [Docs](http://redux.js.org/)
* [Videos](https://egghead.io/series/getting-started-with-redux)
* [React Redux](https://github.com/reactjs/react-redux)
* [Collection of Redux Resources](https://github.com/xgrommx/awesome-redux)

### JSDoc
* [Github Page](https://github.com/jsdoc3/jsdoc)
* [Documentation](http://usejsdoc.org)

### Project Governance
* [Change Log](http://keepachangelog.com/)
