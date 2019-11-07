# chess

WHEN FIRST ACCESSING THE REPOSITORY:
1. clone repository
2. npm install (in repository root folder) to download half the Internet including webpack

STARTING WORK SESSION:
1. npm start (in repository root folder) to get webpack running and watching your files as you change them

REPOSITORY BRANCH POLICY:
1. No direct pushing to master and develop branches is allowed (only Pull Requests that require approval of at least one other contributor to be merged)
2. The branch named "master" is a production branch, only code verified on develop branch can be merged into master
3. The branch named "develop" is the main aggregating branch of the repository, PR from individual task-oriented branches should be made to develop rather than master
4. Contributos should, as a general rule, work on separate task-oriented branches (one person per branch).
5. The naming of task-oriented branches should follow the convention: taskType/descriptiveName where taskType is one of the following:
 - feat/ for branches created to introduce new features and expand the functionality of the application
 - bug/ for branches created to fix issues with existing features not working as intended
 - chore/ for branches created with the purpose of improving code organization, configuring something or otherwise perform supporting takss that aren't focused on development of new features or fixing existing ones

FOLDER STRUCTURE:
docs - this folder contains the index.html file and webpack-generated contents that shouldn't be manually edited or commited to the repository

src - the folder containing source files of the application, including index.js file that serves as the main script of the application (scripts contained within are those that are going to be executed within docs/index.html file)

src/game - this folder contains source files for the logic of the application
src/game/board - this folder contains source files related to state of the board (piece positions on the board along with history)
src/game/moveFinding - this folder contains source files related to calculating of available moves

src/interface - this folder contains the source files for the display logic of the application