---
title: Listener
sidebar_position: 1
---

A rewarded events interface.

## Methods

### `onLoad()`

Called when the ad is ready to show.
**Param:**

| Param | Type                | Description                   |
| ----- | ------------------- | ----------------------------- |
| ad    | [AdView](../banner) | Request load exception object |

### `onDismissed()`

Called when the ad is ready was closed.

### `onImpression()`

Called when the ad is opened.

### `onClicked()`

Called when user click on ad.

### `onFailedToLoad(exception)`

Called when the ad fails to load

**Param:**

| Param     | Type                                                     | Description                   |
| --------- | -------------------------------------------------------- | ----------------------------- |
| exception | [AdRequestException](../exceptions/ad_request_exception) | Request Load exception object |

### `onFailedToShow(code)`

Called when the ad is loaded but the media fails to show

**Param:**

| Param | Type   | Description                                                  |
| ----- | ------ | ------------------------------------------------------------ |
| code  | String | String containing the cod of error from player or image view |
