# ProductApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteProducts**](#deleteproducts) | **DELETE** /api/products | Delete Product|
|[**getProducts**](#getproducts) | **GET** /api/products | List Products|
|[**getProductsId**](#getproductsid) | **GET** /api/products/{id} | Detail Product|
|[**patchProducts**](#patchproducts) | **PATCH** /api/products | Update product|
|[**postProducts**](#postproducts) | **POST** /api/products | Create Product|

# **deleteProducts**
> ResponseMessage deleteProducts()

Delete a product by ID

### Example

```typescript
import {
    ProductApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to delete (default to undefined)

const { status, data } = await apiInstance.deleteProducts(
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

# **getProducts**
> ResponseListProductData getProducts()

Retrieve a list of products

### Example

```typescript
import {
    ProductApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let q: string; //Query parameter for filtering (optional) (default to undefined)

const { status, data } = await apiInstance.getProducts(
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

**ResponseListProductData**

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

# **getProductsId**
> ResponseDetailProductData getProductsId()

Retrieve details of a product by ID

### Example

```typescript
import {
    ProductApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item (default to undefined)

const { status, data } = await apiInstance.getProductsId(
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

**ResponseDetailProductData**

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

# **patchProducts**
> ResponseMessage patchProducts(updateProductPayload)

Update an existing product by ID

### Example

```typescript
import {
    ProductApi,
    Configuration,
    UpdateProductPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let id: string; //ID of the item to update (default to undefined)
let updateProductPayload: UpdateProductPayload; //

const { status, data } = await apiInstance.patchProducts(
    xTenantID,
    id,
    updateProductPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProductPayload** | **UpdateProductPayload**|  | |
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

# **postProducts**
> ResponseCreateProductData postProducts(createProductPayload)

Create a new product

### Example

```typescript
import {
    ProductApi,
    Configuration,
    CreateProductPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductApi(configuration);

let xTenantID: string; //The tenant ID for scoping the request (default to undefined)
let createProductPayload: CreateProductPayload; //

const { status, data } = await apiInstance.postProducts(
    xTenantID,
    createProductPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProductPayload** | **CreateProductPayload**|  | |
| **xTenantID** | [**string**] | The tenant ID for scoping the request | defaults to undefined|


### Return type

**ResponseCreateProductData**

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

