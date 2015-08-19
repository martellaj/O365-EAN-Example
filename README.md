# EAN with Office 365 example

An Angular app with a Node backend using Express (no Mongo, thus EAN) demonstrating:

* Authentication with Azure AD via Node using [PassportJS]() and the [passport-azure-oauth]() strategy
* Getting an access token to the [Office 365 unified API]() using the passport-azure-oauth
* Making API requests to the Office 365 unified API

## Directory structure
    +--- server.js                        // The entry point of the server.	           
    |
    \--- public                           // The client (Angular code).            
    |    \--- controllers
    |    |    +--- mainController.js
    |    |    +--- navbarController.js		
    |    \--- scripts
    |    |    +--- app.js				
    |    \--- services			
    |    |    +--- commonFactory.js					
    |    \--- views
    |    |    +--- main.html				
    |    +--- index.html
    |    +--- styles.css						
    \--- app                              // The server (Node + Express code).
    |    \--- routes
    |    |    +--- apiRoutes.js           // Where the Office 365 unified API calls are made.
    |    |    +--- authRoutes.js          // The PassportJS authentication routes.								
    |    \--- scripts
    |    |    +--- config.js              // Information about the Azure AD app and tenant.		
    |    |    +--- passport.js            // Where the PassportJS strategy is configured.

## Getting set up with Office 365 development
Office 365 development requires some lengthy initial setup. Don't be discouraged, it'll be worth it. Check out [dev.office.com](dev.office.com) for details. To get up and running with Angular development, check out [Create an Angular app with Office 365 APIs](https://msdn.microsoft.com/en-us/office/office365/howto/getting-started-Office-365-APIs?javascript) on MSDN.

## Configuring the app
Configuring the app is pretty straight-forward. Go to the *config.js* file in the *app/scripts* directory and replace the values with the values found in your Azure AD's app's page. See the comments in that file for details on where to get those values. 

## Running the app
After downloading the code, install the app's dependencies using npm.
  
```npm install```

Once the dependencies are finished installing, start the server using node.

```node server.js```

The server will start on port 8080 (unless configured differently in *server.js*). Navigate to **127.0.0.1:8080/** in your web browser to access the Angular application and then log in to Azure AD with credentials from the tenant you set up the app in.

## Questions and comments

* If you have any trouble running this sample, please [log an issue](https://github.com/martellaj/O365-EAN-Example/issues).
* For any other comments, get at me on [Twitter](http://www.twitter.com/martellaj).
