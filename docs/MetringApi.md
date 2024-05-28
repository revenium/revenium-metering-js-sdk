# ReveniumMeteringApi.MetringApi

All URIs are relative to *https://api.revenium.io/meter/v1/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meter**](MetringApi.md#meter) | **POST** /meter | Insert API metering data
[**valid**](MetringApi.md#valid) | **GET** /meter/product-key | Determine if a ProductKey is valid or not

<a name="meter"></a>
# **meter**
> Unit meter(body)

Insert API metering data

Insert API metering data

### Example
```javascript
import {ReveniumMeteringApi} from 'revenium_metering_api';

let apiInstance = new ReveniumMeteringApi.MetringApi();
let body = new ReveniumMeteringApi.MeteringRequestDTO(); // MeteringRequestDTO | 

apiInstance.meter(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MeteringRequestDTO**](MeteringRequestDTO.md)|  | 

### Return type

[**Unit**](Unit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="valid"></a>
# **valid**
> Object valid(opts)

Determine if a ProductKey is valid or not

Determine if a ProductKey is valid or not

### Example
```javascript
import {ReveniumMeteringApi} from 'revenium_metering_api';

let apiInstance = new ReveniumMeteringApi.MetringApi();
let opts = { 
  'productKey': "productKey_example", // String | The product key
  'application': "application_example" // String | The application ID
};
apiInstance.valid(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productKey** | **String**| The product key | [optional] 
 **application** | **String**| The application ID | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

