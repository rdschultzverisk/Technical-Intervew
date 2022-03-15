# Technical-Interview

Node.js is required to run this project.
https://nodejs.org/en/

Java is also needed.
https://www.java.com/download/ie_manual.jsp

Afterwards, webdriver-manager is required along with Protractor.

## In a terminal / powershell window.

For Protractor

*npm install -g protractor*

For Webdriver

*webdriver-manager update*

> Note: You may encounter an error saying you don't have permission to do this.  If you type "Get-ExecutionPolicy" and get "Restricted" back it's simple to fix.
> Open a new powershell window and type "set-executionpolicy remotesigned" and hit enter.  If you type "Get-ExecutionPolicy" again and hit enter you should see the response
> "RemoteSigned".  This allows you to run signed remote scripts from the internet.

And then finally

*webdriver-manager start.*

Once webdriver manager is running you can begin running tests.

In a second terminal / powershell window
Go to the directory where the project is located and run...

*protractor conf.js*
