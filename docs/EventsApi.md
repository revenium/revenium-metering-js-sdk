# ReveniumMeteringApi.EventsApi

All URIs are relative to *https://api.revenium.io/meter/v1/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**saveEvent**](EventsApi.md#saveEvent) | **POST** /event | Save can API event

<a name="saveEvent"></a>
# **saveEvent**
> saveEvent(body)

Save can API event

Save an API event

### Example
```javascript
import {ReveniumMeteringApi} from 'revenium_metering_api';

let apiInstance = new ReveniumMeteringApi.EventsApi();
let body = new ReveniumMeteringApi.ApiEventDTO(); // ApiEventDTO | 

apiInstance.saveEvent(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApiEventDTO**](ApiEventDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

