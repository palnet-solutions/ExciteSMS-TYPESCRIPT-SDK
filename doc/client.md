
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production
  accessToken: 'AccessToken',
})
```

## Excitesms Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| misc | Gets MiscController |

