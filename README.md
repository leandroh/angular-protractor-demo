# ng-protractor-demo

In this tutorial/demo we will see how to create a dead simple calculator application using AngularJS and Protractor tests. Protractor runs tests against your application running in a real browser, simulating how a user would interact with your app.

Prerequisite
------------

- Node.js
- npm


Follow the white rabbit. :rabbit2:

Download demo
--------------

    git clone https://github.com/leandroh/ng-protractor-demo.git
    cd ng-protractor-demo
    npm install

Run the web server
------------------

Start the mocked web server application in Express with the command:

``
node scripts/web-server.js
``

Install Protractor
------------------

Use npm to install Protractor globally with:

``
npm install -g protractor
``

Selenium Server
---------------

You will need to get an instance of a Selenium Server running. Use it to download the necessary binaries with:

``
webdriver-manager update
``

Run tests
---------

Finally run the tests with:

``
npm test
``

See magic happening!
