# ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**$schema** | **string** | A URL to the JSON Schema for this object. | [optional] [readonly] [default to undefined]
**message** | **string** | Response message | [default to undefined]
**meta** | [**Meta**](Meta.md) | Response metadata | [default to undefined]

## Example

```typescript
import { ResponseMessage } from './api';

const instance: ResponseMessage = {
    $schema,
    message,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
