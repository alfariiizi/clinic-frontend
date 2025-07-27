# ResponseListQueueEntryData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**$schema** | **string** | A URL to the JSON Schema for this object. | [optional] [readonly] [default to undefined]
**data** | [**Array&lt;QueueEntry&gt;**](QueueEntry.md) | Response data | [default to undefined]
**meta** | [**Meta**](Meta.md) | Response metadata | [default to undefined]

## Example

```typescript
import { ResponseListQueueEntryData } from './api';

const instance: ResponseListQueueEntryData = {
    $schema,
    data,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
