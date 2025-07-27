# ClinicApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteClinics**](#deleteclinics) | **DELETE** /api/clinics | Delete Clinic|
|[**getClinics**](#getclinics) | **GET** /api/clinics | List Clinics|
|[**getClinicsId**](#getclinicsid) | **GET** /api/clinics/{id} | Detail Clinic|
|[**patchClinics**](#patchclinics) | **PATCH** /api/clinics | Update clinic|
|[**postClinics**](#postclinics) | **POST** /api/clinics | Create Clinic|

# **deleteClinics**
> ResponseMessage deleteClinics()

Delete a clinic by ID

### Example

```typescript
import {
    ClinicApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClinicApi(configuration);

let id: string; //ID of the item to delete (default to undefined)

const { status, data } = await apiInstance.deleteClinics(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getClinics**
> ResponseListClinicData getClinics()

Retrieve a list of clinics

### Example

```typescript
import {
    ClinicApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClinicApi(configuration);

let q: string; //Query parameter for filtering (optional) (default to undefined)

const { status, data } = await apiInstance.getClinics(
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Query parameter for filtering | (optional) defaults to undefined|


### Return type

**ResponseListClinicData**

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

# **getClinicsId**
> ResponseDetailClinicData getClinicsId()

Retrieve details of a clinic by ID

### Example

```typescript
import {
    ClinicApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClinicApi(configuration);

let id: string; //ID of the item (default to undefined)

const { status, data } = await apiInstance.getClinicsId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the item | defaults to undefined|


### Return type

**ResponseDetailClinicData**

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

# **patchClinics**
> ResponseMessage patchClinics(updateClinicPayload)

Update an existing clinic by ID

### Example

```typescript
import {
    ClinicApi,
    Configuration,
    UpdateClinicPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ClinicApi(configuration);

let id: string; //ID of the item to update (default to undefined)
let updateClinicPayload: UpdateClinicPayload; //

const { status, data } = await apiInstance.patchClinics(
    id,
    updateClinicPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateClinicPayload** | **UpdateClinicPayload**|  | |
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

# **postClinics**
> ResponseCreateClinicData postClinics(createClinicPayload)

Create a new clinic

### Example

```typescript
import {
    ClinicApi,
    Configuration,
    CreateClinicPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ClinicApi(configuration);

let createClinicPayload: CreateClinicPayload; //

const { status, data } = await apiInstance.postClinics(
    createClinicPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createClinicPayload** | **CreateClinicPayload**|  | |


### Return type

**ResponseCreateClinicData**

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

