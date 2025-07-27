# AppointmentApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAppointments**](#deleteappointments) | **DELETE** /api/appointments | Delete Appointment|
|[**getAppointments**](#getappointments) | **GET** /api/appointments | List Appointments|
|[**getAppointmentsId**](#getappointmentsid) | **GET** /api/appointments/{id} | Detail Appointment|
|[**patchAppointments**](#patchappointments) | **PATCH** /api/appointments | Update appointment|
|[**postAppointments**](#postappointments) | **POST** /api/appointments | Create Appointment|

# **deleteAppointments**
> ResponseMessage deleteAppointments()

Delete a appointment by ID

### Example

```typescript
import {
    AppointmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppointmentApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to delete (default to undefined)

const { status, data } = await apiInstance.deleteAppointments(
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

# **getAppointments**
> ResponseListAppointmentData getAppointments()

Retrieve a list of appointments

### Example

```typescript
import {
    AppointmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppointmentApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let q: string; //Query parameter for filtering (optional) (default to undefined)

const { status, data } = await apiInstance.getAppointments(
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

**ResponseListAppointmentData**

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

# **getAppointmentsId**
> ResponseDetailAppointmentData getAppointmentsId()

Retrieve details of a appointment by ID

### Example

```typescript
import {
    AppointmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AppointmentApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item (default to undefined)

const { status, data } = await apiInstance.getAppointmentsId(
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

**ResponseDetailAppointmentData**

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

# **patchAppointments**
> ResponseMessage patchAppointments(updateAppointmentPayload)

Update an existing appointment by ID

### Example

```typescript
import {
    AppointmentApi,
    Configuration,
    UpdateAppointmentPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AppointmentApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to update (default to undefined)
let updateAppointmentPayload: UpdateAppointmentPayload; //

const { status, data } = await apiInstance.patchAppointments(
    xTenantID,
    id,
    updateAppointmentPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAppointmentPayload** | **UpdateAppointmentPayload**|  | |
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

# **postAppointments**
> ResponseCreateAppointmentData postAppointments(createAppointmentPayload)

Create a new appointment

### Example

```typescript
import {
    AppointmentApi,
    Configuration,
    CreateAppointmentPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AppointmentApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let createAppointmentPayload: CreateAppointmentPayload; //

const { status, data } = await apiInstance.postAppointments(
    xTenantID,
    createAppointmentPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAppointmentPayload** | **CreateAppointmentPayload**|  | |
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|


### Return type

**ResponseCreateAppointmentData**

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

