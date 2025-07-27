# LoginPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**$schema** | **string** | A URL to the JSON Schema for this object. | [optional] [readonly] [default to undefined]
**email** | **string** | Email of the user | [default to undefined]
**password** | **string** | Password of the user | [default to undefined]

## Example

```typescript
import { LoginPayload } from './api';

const instance: LoginPayload = {
    $schema,
    email,
    password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
