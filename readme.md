# OAuth Device Code Flow using the MS Graph API

This demonstrates how to use OAuth Device Code Flow with the Microsoft Graph API. It contains a node app and PostMan Collection to demonstrate the process and API calls needed.

If you wish to just try out the MS Graph API see the [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)

## Azure SetUp
In order to use this you will first need to set up an App in Azure. You can use a free account for this.




## PostMan Collection
To make it easy to view the API requests needed and ensure everything is configured correctly a  [postman collection](https://www.postman.com/collection/) is included.

Import the [Postman collection file (v2.1)](device_auth.postman_collection.json) into [Postman App](https://postman.com). A full guide on how to import can be found on the [Postman site](https://learning.postman.com/docs/postman/collections/importing-and-exporting-data/).

Edit the collection and navigate to the `Variables` tab. Enter the  tenantId and clientId and select 'Udpate'. Once this is done you can run each request in teh collection in order.

## Node App Installation and Setup

1. To run this sample rename `config.sample.json` to `config.json`
1. Enter the tenantId and clientId in to the `config.json`
1. Run `npm install`
1. Run `npm start`

The app will request you enter a device code into the MS website then once complete will display the users name.

### More Info
https://oauth.net/2/grant-types/device-code/