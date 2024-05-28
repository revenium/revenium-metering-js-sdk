# ReveniumMeteringApi.MeteringRequestDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | **String** |  | [optional] 
**productKey** | **String** | The Product Key ID | [optional] 
**application** | **String** | The Application ID | [optional] 
**method** | **String** | The HTTP method being invoked | 
**url** | **String** | The HTTP URL being invoked | [optional] 
**metadata** | **String** | Additional billing metadata (supports numeric values and comma-seperated key-value pairs) | [optional] 
**backendLatency** | **Number** | Backend API response time | [optional] 
**gatewayLatency** | **Number** | Latency introduced by the API GW | [optional] 
**responseCode** | **Number** | Backend HTTP response code | 
**timedOut** | **Boolean** | Whether or not the backend timed out | [optional] 
**requestMessageSize** | **Number** | The size of the API request in bytes | [optional] 
**responseMessageSize** | **Number** | The size of the API response in bytes | [optional] 
**requestHeaders** | **[String]** | The comma seperated list of names of the headers in the request | 
**responseHeaders** | **[String]** | The comma seperated list of names of the headers in the response | 
**userAgent** | **String** | The HTTP User Agent | [optional] 
**remoteUser** | **String** | The Remote User | [optional] 
**remoteHost** | **String** | The Remote Host | [optional] 
**httpProtocol** | **String** | The HTTP Protocol | [optional] 
**contentType** | **String** | The Content Type | [optional] 
**correlationId** | **String** | The Correlation ID | [optional] 
**platformAPIKey** | **String** | platformAPIKey | 
**elements** | [**[ElementDTO]**](ElementDTO.md) | Dynamic metering elements | 
**source** | **String** | the source of the event | [optional] 
