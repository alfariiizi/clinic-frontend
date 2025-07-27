# AppointmentEdges


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clinic** | [**Clinic**](Clinic.md) |  | [optional] [default to undefined]
**doctor** | [**Doctor**](Doctor.md) |  | [optional] [default to undefined]
**order_items** | [**Array&lt;OrderItem&gt;**](OrderItem.md) |  | [optional] [default to undefined]
**patient** | [**Patient**](Patient.md) |  | [optional] [default to undefined]
**reminders** | [**Array&lt;AppointmentReminder&gt;**](AppointmentReminder.md) |  | [optional] [default to undefined]
**service** | [**Service**](Service.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AppointmentEdges } from './api';

const instance: AppointmentEdges = {
    clinic,
    doctor,
    order_items,
    patient,
    reminders,
    service,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
