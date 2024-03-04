---
title: InterstitialAd
sidebar_position: 3
---

Class for displaying interstitial ad.

## Constructor

### `InterstitialAd(unitId)`

**Params:**

| Param  | Type   | Description                                                                           |
| ------ | ------ | ------------------------------------------------------------------------------------- |
| unitId | String | Registered interstitial ad unit_id on [AdServer panel](https://adserver.adgrowth.com) |

## Methods

### `Load(OnLoad)`

Load the interstitial ad.

**Param:**

| Param  | Type                                          | Description                      |
| ------ | --------------------------------------------- | -------------------------------- |
| OnLoad | [System.action<[InterstitialAd](.)>] | Called when ad is ready to show |

**Return:** void.

### `Show()`

Show the loaded ad.

**Return:** void.

### `IsLoaded()`

Return a boolean that indicates if the ad is loaded or not.

**Return:** boolean.

### `IsFailed()`

Return a boolean that indicates if the failed to load an ad.

**Return:** boolean.
