* JS code execute it in the browser
* Always client-side scripting language

* JS engine/interpreter that the browser uses to execute JS code
* Google V8 (C++)
* NodeJS (C++ application, uses V8 engine)
* Gave high-level features for JavaScript language
* JavaScript API
* NodeJS is server-side JS API

* nodejs.org
* REPL

## Day02

* __npm init__ to create a new project/package
* npm is node package manager (similar to Maven in java)
* __package.json__ is the project configuration file (similar to pom.xml in Maven)
* When you install node __npm__ is also installed alongwith
* __https://npmjs.com__ is the central repository for node js libraries/packages/modules 


## Sync/Async

* Most of the functions in NodeJS are async by default
* Async functions accept a callback function as argument
* JavaScript and V8 are single threaded by default
* v8 engine CAN execute ONLY ONE Instruction at any point of time
* NodeJS is not single threaded
* Internally NodeJS uses a library called __"libuv"__ for multiple operations
* https://libuv.org
* All the callback functions are queued
* libuv library executes the callback functions one-after the other from the queue
* DO NOT WRITE LONG RUNNING OPERATION IN JS
* All the APIs that you use involve callbacks, which are executed asynchronously, without blocking main thread