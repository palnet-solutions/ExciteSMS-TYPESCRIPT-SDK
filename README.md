
# Getting Started with Excitesms

## Introduction

Get familiar with our APIs and technical resources in your favorite languages.

## Installation

The following section explains how to use the ExcitesmsLib library in a new project.

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](/doc/client.md)

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

## Authorization

This API uses `OAuth 2 Bearer token`.

## List of APIs

* [Misc](/doc/controllers/misc.md)

## Classes Documentation

* [ApiResponse](/doc/api-response.md)
* [ApiError](/doc/api-error.md)

