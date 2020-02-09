# URL Shortner
#### Project Statement
- Create an App to shorten urls and track and graph the URLs hit frequency.(Clone of Bitley)
#### Pre-Requisites
Download and Install [NodeJS](https://nodejs.org/en/)
Install the package manager [npm](http://npmjs.com/).
Use the package manager [npm](http://npmjs.com/) to install ReactJS.
```npm
npm install --save react
```
#### Initial Set-up
Use the package manager [npm](http://npmjs.com/) to install node packages required.
```npm
npm install
```
##### Cd into the client folder then
Use the package manager [npm](http://npmjs.com/) to install node packages required.
```npm
npm install
```
##### The following settings have to be set in the .env file to run the app
```
PORT = YOUR_PORT_ADDRESS

MONGO_URI = YOUR_MONGO_URI

JWT_SECRET = QWERTY2#4

ELASTIC_LOGSTASH_URL = YOUR_ELASTIC_URL
```
JWT_SECRET has to be the same as it is static.
##### At the root folder run the following command to launch the project
```npm
npm run dev
```
##### To view API Documentation, Make Sure the .jsdoc config file exists then run the following command
```npm
npm run doc
```
view the output at the docs folder in the root directory.

#### Project Timeline
- Friday - User Auth Services was fixed and hosted at [url](https://auth-services-aden.herokuapp.com/) crude backend of URL Shortner was created, with login and register screen, 
- Saturday - URL backend was linked with backend and graphs were created. JSdocs, Loggers, Kibana was intergrated with the url backend service
- Sunday - CSS, Comments, ReadME were created, edited, verified and submiited.

# License
[MIT](https://choosealicense.com/licenses/mit/)