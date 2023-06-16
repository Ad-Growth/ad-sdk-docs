---
title: RewardedAd
sidebar_position: 3
---

Class for displaying rewarded ad.

## Construtor

### `RewardedAd(unitId)`

**Params:**

| Param  | Type   | Description                    |
| ------ | ------ | ------------------------------ |
| unitId | unitId | Registered rewarded ad unit_id |

## Methods

### `setListener(listener)`

Set a listener for RewardedAd events

**Param:**

| Param    | Type                                                       | Description                       |
| -------- | ---------------------------------------------------------- | --------------------------------- |
| listener | [RewardedAd.Listener](/docs/api/android/rewarded/listener) | Rewarded event listener interface |

**Return:** void.

### `load(context)`

load an ad.

**Param:**

| Param   | Type     | Description                             |
| ------- | -------- | --------------------------------------- |
| context | Activity | Activity where the ad will be displayed |

**Return:** void.

### `show(context)`

Show the loaded ad.

**Param:**

| Param   | Type     | Description                             |
| ------- | -------- | --------------------------------------- |
| context | Activity | Activity where the ad will be displayed |

**Return:** void.

### `isLoaded()`

Return a boolean that indicates if the ad is loaded or not.

**Return:** boolean.

### `isFailed()`

Return a boolean that indicates if the failed to load an ad.

**Return:** boolean.
