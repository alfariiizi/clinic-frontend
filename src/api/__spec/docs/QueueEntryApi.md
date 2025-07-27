# QueueEntryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteQueueEntrys**](#deletequeueentrys) | **DELETE** /api/queue-entrys | Delete QueueEntry|
|[**getQueueEntrys**](#getqueueentrys) | **GET** /api/queue-entrys | List QueueEntrys|
|[**getQueueEntrysId**](#getqueueentrysid) | **GET** /api/queue-entrys/{id} | Detail QueueEntry|
|[**patchQueueEntrys**](#patchqueueentrys) | **PATCH** /api/queue-entrys | Update queueentry|
|[**postQueueEntrys**](#postqueueentrys) | **POST** /api/queue-entrys | Create QueueEntry|

# **deleteQueueEntrys**
> ResponseMessage deleteQueueEntrys()

Delete a queueentry by ID

### Example

```typescript
import {
    QueueEntryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new QueueEntryApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to delete (default to undefined)

const { status, data } = await apiInstance.deleteQueueEntrys(
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

# **getQueueEntrys**
> ResponseListQueueEntryData getQueueEntrys()

Retrieve a list of queueentrys

### Example

```typescript
import {
    QueueEntryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new QueueEntryApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let q: string; //Query parameter for filtering (optional) (default to undefined)

const { status, data } = await apiInstance.getQueueEntrys(
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

**ResponseListQueueEntryData**

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

# **getQueueEntrysId**
> ResponseDetailQueueEntryData getQueueEntrysId()

Retrieve details of a queueentry by ID

### Example

```typescript
import {
    QueueEntryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new QueueEntryApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item (default to undefined)

const { status, data } = await apiInstance.getQueueEntrysId(
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

**ResponseDetailQueueEntryData**

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

# **patchQueueEntrys**
> ResponseMessage patchQueueEntrys(updateQueueEntryPayload)

Update an existing queueentry by ID

### Example

```typescript
import {
    QueueEntryApi,
    Configuration,
    UpdateQueueEntryPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new QueueEntryApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to update (default to undefined)
let updateQueueEntryPayload: UpdateQueueEntryPayload; //

const { status, data } = await apiInstance.patchQueueEntrys(
    xTenantID,
    id,
    updateQueueEntryPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateQueueEntryPayload** | **UpdateQueueEntryPayload**|  | |
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

# **postQueueEntrys**
> ResponseCreateQueueEntryData postQueueEntrys(createQueueEntryPayload)

Create a new queueentry

### Example

```typescript
import {
    QueueEntryApi,
    Configuration,
    CreateQueueEntryPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new QueueEntryApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let createQueueEntryPayload: CreateQueueEntryPayload; //

const { status, data } = await apiInstance.postQueueEntrys(
    xTenantID,
    createQueueEntryPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createQueueEntryPayload** | **CreateQueueEntryPayload**|  | |
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|


### Return type

**ResponseCreateQueueEntryData**

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

