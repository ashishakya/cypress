# CYPRESS
Modern days automation testing framework.

# Directory Structure

 | Directory             | Description                                                                                                                                             |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Node Modules          | Used to house dependencies.                                                                                                                             |
| cypress.json          | Enables us to change default settings.                                                                                                                  |
| videos                | Used to store videos of test recordings.                                                                                                                |
| screenshots           | Use to store images of specific tests.                                                                                                                  |
| support               | Used to store custom commands and files.                                                                                                                |
| support ->index.js    | First file which cypress investigates; any imports, any libraries, event listener, changes to cypress default behaviour, even the ability to add hooks. |
| support ->commands.js | Used to store command commands, even the ability to override cypress function.                                                                          |
| plugin->index.js      | Extend the cypress functionality; location where we can add plugins.                                                                                    |
| integration           | The main folder where we store our test files. Cypress test runner will look into this folder in order to location test files.                          |
| fixtures              | where we keep our test data objects, mocked objects and any other data which we need for our tests. Mostly we add JSON files.                           |
