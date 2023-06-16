---
title: AdRequestException
sidebar_position: 2
---

Any ad request error class.

## Attributes

| Attribute                  | Type          | Value                        | Description                                                                                                                     |
| -------------------------- | ------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| PLAYBACK_ERROR             | static String | "playback_error"             | error while trying to play a media                                                                                              |
| NETWORK_ERROR              | static String | "network_error"              | internet connection error                                                                                                       |
| UNKNOWN_ERROR              | static String | "unknown_error"              | unknown error                                                                                                                   |
| UNIT_ID_MISMATCHED_AD_TYPE | static String | "unit_id_mismatched_ad_type" | unit_id of a different type than the ad format used, for example a unit_id registered as a banner being used by an interstitial |
| INTERNAL_ERROR             | static String | "internal_error"             | internal error                                                                                                                  |
| INVALID_CLIENT_KEY         | static String | "invalid_client_key"         | your app client_key is invalid or is blocked                                                                                    |
| INVALID_UNIT_ID            | static String | "invalid_unit_id"            | the provided unit_id is valid or is blocked                                                                                     |
| NO_AD_FOUND                | static String | "no_ad_found"                | no ad is found for user profile settings                                                                                        |
| ALREADY_LOADED             | static String | "already_loaded"             | this ad is already loaded, you can only show it                                                                                 |

## Methods

### `getCode()`

Get the error code

**Return:** String.
