# Revenium Metering JavaScript SDK

This is a JavaScript SDK for the Revenium Metering API. It is generated from the OpenAPI specification. The SDK is intended to be used in a Node.js environment.

## Installation

```shell
    npm install revenium_metering_api  --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import('revenium_metering_api').then(revenium => {
    const metering = new revenium.MeteringApi()
    
    metering.apiClient.defaultHeaders["x-api-key"] = process.env.API_KEY;

    const payload = {
        method: 'POST',
        url: '/hello',
        application: 'my-awesome-app',
        responseCode: 200,
        requestHeaders: ['content-type'],
        responseHeaders: ['content-type'],
        elements: [
            { name: 'hello', value: 'world' }
        ]
    };

    metering.meter(payload, (error, data, response) => {
        if (error) {
            console.error("Error submitting metering request: " + error);
        } else {
            console.log('Metering request successfully submitted');
        }
    });

});

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

