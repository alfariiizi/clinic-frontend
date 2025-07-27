# OrderApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteOrders**](#deleteorders) | **DELETE** /api/orders | Delete Order|
|[**getOrders**](#getorders) | **GET** /api/orders | List Orders|
|[**getOrdersId**](#getordersid) | **GET** /api/orders/{id} | Detail Order|
|[**patchOrders**](#patchorders) | **PATCH** /api/orders | Update order|
|[**postOrders**](#postorders) | **POST** /api/orders | Create Order|

# **deleteOrders**
> ResponseMessage deleteOrders()

Delete a order by ID

### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to delete (default to undefined)

const { status, data } = await apiInstance.deleteOrders(
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

# **getOrders**
> ResponseListOrderData getOrders()

Retrieve a list of orders

### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let q: string; //Query parameter for filtering (optional) (default to undefined)

const { status, data } = await apiInstance.getOrders(
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

**ResponseListOrderData**

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

# **getOrdersId**
> ResponseDetailOrderData getOrdersId()

Retrieve details of a order by ID

### Example

```typescript
import {
    OrderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item (default to undefined)

const { status, data } = await apiInstance.getOrdersId(
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

**ResponseDetailOrderData**

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

# **patchOrders**
> ResponseMessage patchOrders(updateOrderPayload)

Update an existing order by ID

### Example

```typescript
import {
    OrderApi,
    Configuration,
    UpdateOrderPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to update (default to undefined)
let updateOrderPayload: UpdateOrderPayload; //

const { status, data } = await apiInstance.patchOrders(
    xTenantID,
    id,
    updateOrderPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderPayload** | **UpdateOrderPayload**|  | |
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

# **postOrders**
> ResponseCreateOrderData postOrders(createOrderPayload)

Create a new order

### Example

```typescript
import {
    OrderApi,
    Configuration,
    CreateOrderPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let createOrderPayload: CreateOrderPayload; //

const { status, data } = await apiInstance.postOrders(
    xTenantID,
    createOrderPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrderPayload** | **CreateOrderPayload**|  | |
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|


### Return type

**ResponseCreateOrderData**

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

