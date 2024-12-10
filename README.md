# node configuration for Revenium Metering API

ReveniumMeteringApi - JavaScript client for the revenium metering api

- API version: 1.14.0-SNAPSHOT
- Package version: 1.14.0-SNAPSHOT

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install revenium_metering_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ReveniumMeteringApi = require('revenium_metering_api');

var api = new ReveniumMeteringApi.EventsApi()
var body = new ReveniumMeteringApi.ApiEventDTO(); // {ApiEventDTO} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.saveEvent(body, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.revenium.io/meter/v1/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ReveniumMeteringApi.EventsApi* | [**saveEvent**](docs/EventsApi.md#saveEvent) | **POST** /event | Save can API event
*ReveniumMeteringApi.MeteringApi* | [**meter**](docs/MeteringApi.md#meter) | **POST** /meter | Insert API metering data
*ReveniumMeteringApi.MeteringApi* | [**valid**](docs/MeteringApi.md#valid) | **GET** /meter/product-key | Determine if a ProductKey is valid or not

## Documentation for Models

 - [ReveniumMeteringApi.ApiEventDTO](docs/ApiEventDTO.md)
 - [ReveniumMeteringApi.ElementDTO](docs/ElementDTO.md)
 - [ReveniumMeteringApi.MeteringRequestDTO](docs/MeteringRequestDTO.md)
 - [ReveniumMeteringApi.Unit](docs/Unit.md)

## Documentation for Authorization


### x-api-key

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

