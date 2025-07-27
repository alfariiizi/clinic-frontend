# BillingRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**discount_amount** | **number** |  | [optional] [default to undefined]
**due_date** | **string** |  | [optional] [default to undefined]
**edges** | [**BillingRecordEdges**](BillingRecordEdges.md) |  | [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**invoice_number** | **string** |  | [optional] [default to undefined]
**line_items** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**notes** | **string** |  | [optional] [default to undefined]
**paid_at** | **string** |  | [optional] [default to undefined]
**payment_method** | **string** |  | [optional] [default to undefined]
**payment_status** | **string** |  | [optional] [default to undefined]
**tax_amount** | **number** |  | [optional] [default to undefined]
**total_amount** | **number** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { BillingRecord } from './api';

const instance: BillingRecord = {
    amount,
    created_at,
    currency,
    discount_amount,
    due_date,
    edges,
    id,
    invoice_number,
    line_items,
    notes,
    paid_at,
    payment_method,
    payment_status,
    tax_amount,
    total_amount,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
