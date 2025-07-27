# FeatureApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteFeatures**](#deletefeatures) | **DELETE** /api/features | Delete Feature|
|[**getFeatures**](#getfeatures) | **GET** /api/features | List Features|
|[**getFeaturesId**](#getfeaturesid) | **GET** /api/features/{id} | Detail Feature|
|[**patchFeatures**](#patchfeatures) | **PATCH** /api/features | Update feature|
|[**postFeatures**](#postfeatures) | **POST** /api/features | Create Feature|

# **deleteFeatures**
> ResponseMessage deleteFeatures()

Delete a feature by ID

### Example

```typescript
import {
    FeatureApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to delete (default to undefined)

const { status, data } = await apiInstance.deleteFeatures(
    xTenantID,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|
| **id** | [**string**] | ID of the item to delete | defaults to undefined|


### Return type

**ResponseMessage**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFeatures**
> ResponseListFeatureData getFeatures()

Retrieve a list of features

### Example

```typescript
import {
    FeatureApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let q: string; //Query parameter for filtering (optional) (default to undefined)

const { status, data } = await apiInstance.getFeatures(
    xTenantID,
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|
| **q** | [**string**] | Query parameter for filtering | (optional) defaults to undefined|


### Return type

**ResponseListFeatureData**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFeaturesId**
> ResponseDetailFeatureData getFeaturesId()

Retrieve details of a feature by ID

### Example

```typescript
import {
    FeatureApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item (default to undefined)

const { status, data } = await apiInstance.getFeaturesId(
    xTenantID,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|
| **id** | [**string**] | ID of the item | defaults to undefined|


### Return type

**ResponseDetailFeatureData**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchFeatures**
> ResponseMessage patchFeatures(updateFeaturePayload)

Update an existing feature by ID

### Example

```typescript
import {
    FeatureApi,
    Configuration,
    UpdateFeaturePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to update (default to undefined)
let updateFeaturePayload: UpdateFeaturePayload; //

const { status, data } = await apiInstance.patchFeatures(
    xTenantID,
    id,
    updateFeaturePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFeaturePayload** | **UpdateFeaturePayload**|  | |
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|
| **id** | [**string**] | ID of the item to update | defaults to undefined|


### Return type

**ResponseMessage**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFeatures**
> ResponseCreateFeatureData postFeatures(createFeaturePayload)

Create a new feature

### Example

```typescript
import {
    FeatureApi,
    Configuration,
    CreateFeaturePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new FeatureApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let createFeaturePayload: CreateFeaturePayload; //

const { status, data } = await apiInstance.postFeatures(
    xTenantID,
    createFeaturePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFeaturePayload** | **CreateFeaturePayload**|  | |
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|


### Return type

**ResponseCreateFeatureData**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

