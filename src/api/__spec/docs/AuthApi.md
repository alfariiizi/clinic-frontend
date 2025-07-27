# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postAdminLogin**](#postadminlogin) | **POST** /api/admin/login | Login Admin|
|[**postAuthLogin**](#postauthlogin) | **POST** /api/auth/login | Login|
|[**postAuthRefresh**](#postauthrefresh) | **POST** /api/auth/refresh | Refresh|

# **postAdminLogin**
> ResponseLoginAdminData postAdminLogin(loginAdminPayload)

Login as an admin user

### Example

```typescript
import {
    AuthApi,
    Configuration,
    LoginAdminPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let loginAdminPayload: LoginAdminPayload; //

const { status, data } = await apiInstance.postAdminLogin(
    loginAdminPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginAdminPayload** | **LoginAdminPayload**|  | |


### Return type

**ResponseLoginAdminData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAuthLogin**
> ResponseLoginData postAuthLogin(loginPayload)

Login handler

### Example

```typescript
import {
    AuthApi,
    Configuration,
    LoginPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let loginPayload: LoginPayload; //

const { status, data } = await apiInstance.postAuthLogin(
    loginPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginPayload** | **LoginPayload**|  | |


### Return type

**ResponseLoginData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAuthRefresh**
> ResponseRefreshData postAuthRefresh(refreshPayload)

Refresh handler

### Example

```typescript
import {
    AuthApi,
    Configuration,
    RefreshPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let refreshPayload: RefreshPayload; //

const { status, data } = await apiInstance.postAuthRefresh(
    refreshPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshPayload** | **RefreshPayload**|  | |


### Return type

**ResponseRefreshData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

