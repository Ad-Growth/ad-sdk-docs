---
title: InterstitialAd
sidebar_position: 3
---

Class for displaying interstitial ad.

## Construtor

### `InterstitialAd(unitId)`

**Params:**

| Param  | Type   | Description                                                                           |
| ------ | ------ | ------------------------------------------------------------------------------------- |
| unitId | String | Registered interstitial ad unit_id on [AdServer panel](https://adserver.adgrowth.com) |

## Methods

### `Load(OnLoad)`

load an ad.

**Param:**

| Param  | Type                                          | Description                      |
| ------ | --------------------------------------------- | -------------------------------- |
| OnLoad | [System.action<[InterstitialAd](.)>] | Called when ad is ready for show |

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
