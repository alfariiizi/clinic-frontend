# DoctorApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteDoctors**](#deletedoctors) | **DELETE** /api/doctors | Delete Doctor|
|[**getDoctors**](#getdoctors) | **GET** /api/doctors | List Doctors|
|[**getDoctorsId**](#getdoctorsid) | **GET** /api/doctors/{id} | Detail Doctor|
|[**patchDoctors**](#patchdoctors) | **PATCH** /api/doctors | Update doctor|
|[**postDoctors**](#postdoctors) | **POST** /api/doctors | Create Doctor|

# **deleteDoctors**
> ResponseMessage deleteDoctors()

Delete a doctor by ID

### Example

```typescript
import {
    DoctorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DoctorApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to delete (default to undefined)

const { status, data } = await apiInstance.deleteDoctors(
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

# **getDoctors**
> ResponseListDoctorData getDoctors()

Retrieve a list of doctors

### Example

```typescript
import {
    DoctorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DoctorApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let q: string; //Query parameter for filtering (optional) (default to undefined)

const { status, data } = await apiInstance.getDoctors(
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

**ResponseListDoctorData**

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

# **getDoctorsId**
> ResponseDetailDoctorData getDoctorsId()

Retrieve details of a doctor by ID

### Example

```typescript
import {
    DoctorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DoctorApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item (default to undefined)

const { status, data } = await apiInstance.getDoctorsId(
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

**ResponseDetailDoctorData**

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

# **patchDoctors**
> ResponseMessage patchDoctors(updateDoctorPayload)

Update an existing doctor by ID

### Example

```typescript
import {
    DoctorApi,
    Configuration,
    UpdateDoctorPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new DoctorApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to update (default to undefined)
let updateDoctorPayload: UpdateDoctorPayload; //

const { status, data } = await apiInstance.patchDoctors(
    xTenantID,
    id,
    updateDoctorPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDoctorPayload** | **UpdateDoctorPayload**|  | |
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

# **postDoctors**
> ResponseCreateDoctorData postDoctors(createDoctorPayload)

Create a new doctor

### Example

```typescript
import {
    DoctorApi,
    Configuration,
    CreateDoctorPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new DoctorApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let createDoctorPayload: CreateDoctorPayload; //

const { status, data } = await apiInstance.postDoctors(
    xTenantID,
    createDoctorPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDoctorPayload** | **CreateDoctorPayload**|  | |
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|


### Return type

**ResponseCreateDoctorData**

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

