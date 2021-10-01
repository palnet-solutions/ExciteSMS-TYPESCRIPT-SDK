
# Send SMS

## Structure

`SendSMS`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data`](/doc/models/data.md) | Required | - |

## Example (as JSON)

```json
{
  "status": "success",
  "message": "Your message was successfully delivered",
  "data": {
    "uid": "61536aa9cab81",
    "to": "0972150298",
    "from": "ExciteSMS",
    "message": "Welcome",
    "status": "Delivered",
    "cost": "1"
  }
}
```

