# Logging

## Logging Technology
There a few different frameworks used for logging.

* [redux-logger](https://www.npmjs.com/package/redux-logger): Responsible for logging events originating from the Redux framework.
* [router5/plugins/logger](https://github.com/router5/router5/blob/master/packages/router5-plugin-logger/modules/index.ts): Responsible for logging transitions orchestrated by the router.

## Development Logging
Currently logging only occurs in development mode. This is specified by the Node.js environment variable NODE_ENV. If NODE_ENV is set to _development_ then logging is enabled.

### Console
Log messages can be seen in the Developer Tools Console.

## Logging Files
Currently Insight only logs to the console.
