---
title: SDKInitException
sidebar_position: 1
---

[AdServer](../ad_server) initialization error class.

## Attributes

| Attribute               | Type          | Value                     | Description                                                |
| ----------------------- | ------------- | ------------------------- | ---------------------------------------------------------- |
| UNAUTHORIZED_CLIENT_KEY | static String | "unauthorized_client_key" | the provided client_key is blocked or unauthorized for use |
| ALREADY_INITIALIZED     | static String | "already_initialized"     | already initialized the SDK, just start using it           |
| NETWORK_ERROR           | static String | "network_error"           | internet connection error                                  |
| UNKNOWN_ERROR           | static String | "unknown_error"           | unknown error                                              |
| INTERNAL_ERROR          | static String | "internal_error"          | internal error                                             |

## Methods

### `code` _{ get; }_

Error code

**Return:** String.

### `message` _{ get; }_

Error message

**Return:** String.
