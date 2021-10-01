# Misc

```ts
const miscController = new MiscController(client);
```

## Class Name

`MiscController`

## Methods

* [Send SMS](/doc/controllers/misc.md#send-sms)
* [View an SMS](/doc/controllers/misc.md#view-an-sms)


# Send SMS

Excite SMS SMS API allows you to send and receive SMS messages to and from any country in the world through a REST API. Each message is identified by a unique random ID so that users can always check the status of a message using the given endpoint.

```ts
async sendSMS(
  accept: string,
  body: SendSMSRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SendSMS>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `body` | [`SendSMSRequest`](/doc/models/send-sms-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SendSMS`](/doc/models/send-sms.md)

## Example Usage

```ts
const accept = 'application/json';
const body: SendSMSRequest = {
  recipient: '0972150298',
  senderId: 'ExciteSMS',
  message: 'Welcome',
};

try {
  const { result, ...httpResponse } = await miscController.sendSMS(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

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


# View an SMS

```ts
async viewAnSMS(
  uid: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ViewAnSMS>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string` | Query, Required | You can use Excite SMS's SMS API to retrieve information of an existing inbound or outbound SMS message.<br><br>You only need to supply the unique message id that was returned upon creation or receiving. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ViewAnSMS`](/doc/models/view-an-sms.md)

## Example Usage

```ts
const uid = '614e19186613d';
try {
  const { result, ...httpResponse } = await miscController.viewAnSMS(uid);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "status": "success",
  "message": null,
  "data": {
    "current_page": 1,
    "data": [
      {
        "uid": "6147812b6c15a",
        "to": "0760079611",
        "from": "Samafrica",
        "message": "Api test",
        "status": "Delivered",
        "cost": "1"
      },
      {
        "uid": "61478ab0a9cff",
        "to": "0760079611",
        "from": "Samafrica",
        "message": "Api test",
        "status": "Delivered",
        "cost": "1"
      },
      {
        "uid": "614f849f28a20",
        "to": "0760079611",
        "from": "ExciteSMS",
        "message": "Api test",
        "status": "Delivered",
        "cost": "1"
      },
      {
        "uid": "614f84fa08af9",
        "to": "0972150298",
        "from": "ExciteSMS",
        "message": "Api test",
        "status": "Delivered",
        "cost": "1"
      }
    ],
    "first_page_url": "https://gateway.excitesms.tech/api/v3/sms?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://gateway.excitesms.tech/api/v3/sms?page=1",
    "links": [
      {
        "url": null,
        "label": "pagination.previous",
        "active": false
      },
      {
        "url": "https://gateway.excitesms.tech/api/v3/sms?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "pagination.next",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "https://gateway.excitesms.tech/api/v3/sms",
    "per_page": 25,
    "prev_page_url": null,
    "to": 4,
    "total": 4
  }
}
```

