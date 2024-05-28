# ReveniumMeteringApi.ApiEventDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **String** |  | [optional] 
**eventType** | **String** |  | [optional] 
**assetId** | **String** |  | [optional] 
**productKey** | **String** |  | [optional] 
**application** | **String** |  | [optional] 
**method** | **String** |  | [optional] 
**currentMillis** | **Number** |  | [optional] 
**uri** | **String** |  | [optional] 
**elapsedTime** | **Number** |  | [optional] 
**metadata** | **String** |  | [optional] 
**responseCode** | **Number** |  | 
**requestMessageSize** | **Number** |  | [optional] 
**responseMessageSize** | **Number** |  | [optional] 
**contentType** | **String** |  | [optional] 
**remoteHost** | **String** |  | [optional] 
**userAgent** | **String** |  | [optional] 
**correlationId** | **String** |  | [optional] 
**backendLatency** | **Number** |  | [optional] 
**clientId** | **String** |  | [optional] 
**source** | **String** |  | [optional] 

<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum

* `REQUEST` (value: `"REQUEST"`)
* `RESPONSE` (value: `"RESPONSE"`)

