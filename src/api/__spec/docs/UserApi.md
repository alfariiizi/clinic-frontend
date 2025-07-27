# UserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteUsers**](#deleteusers) | **DELETE** /api/users | Delete User|
|[**getUsers**](#getusers) | **GET** /api/users | List Users|
|[**getUsersId**](#getusersid) | **GET** /api/users/{id} | Detail User|
|[**patchUsers**](#patchusers) | **PATCH** /api/users | Update user|
|[**postUsers**](#postusers) | **POST** /api/users | Create User|

# **deleteUsers**
> ResponseMessage deleteUsers()

Delete a user by ID

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let id: string; //ID of the item to delete (default to undefined)

const { status, data } = await apiInstance.deleteUsers(
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

# **getUsers**
> ResponseListUserData getUsers()

Retrieve a list of users

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let q: string; //Query parameter for filtering (optional) (default to undefined)

const { status, data } = await apiInstance.getUsers(
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Query parameter for filtering | (optional) defaults to undefined|


### Return type

**ResponseListUserData**

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

# **getUsersId**
> ResponseDetailUserData getUsersId()

Retrieve details of a user by ID

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let id: string; //ID of the item (default to undefined)

const { status, data } = await apiInstance.getUsersId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the item | defaults to undefined|


### Return type

**ResponseDetailUserData**

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

# **patchUsers**
> ResponseMessage patchUsers(updateUserPayload)

Update an existing user by ID

### Example

```typescript
import {
    UserApi,
    Configuration,
    UpdateUserPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let id: string; //ID of the item to update (default to undefined)
let updateUserPayload: UpdateUserPayload; //

const { status, data } = await apiInstance.patchUsers(
    id,
    updateUserPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserPayload** | **UpdateUserPayload**|  | |
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

# **postUsers**
> ResponseCreateUserData postUsers(createUserPayload)

Create a new user

### Example

```typescript
import {
    UserApi,
    Configuration,
    CreateUserPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let createUserPayload: CreateUserPayload; //

const { status, data } = await apiInstance.postUsers(
    createUserPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserPayload** | **CreateUserPayload**|  | |


### Return type

**ResponseCreateUserData**

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

