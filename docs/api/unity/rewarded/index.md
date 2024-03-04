---
title: RewardedAd
sidebar_position: 4
---

Class for displaying rewarded ad.

## Constructor

### `RewardedAd(unitId)`

**Params:**

| Param  | Type   | Description                                                                       |
| ------ | ------ | --------------------------------------------------------------------------------- |
| unitId | String | Registered rewarded ad unit_id on [AdServer panel](https://adserver.adgrowth.com) |

## Methods

### `Load(OnLoad)`

Load the rewarded ad.

**Param:**

| Param  | Type                            | Description                      |
| ------ | ------------------------------- | -------------------------------- |
| OnLoad | [System.action<[RewardedAd](.)>] | Called when ad is ready to show |

**Return:** void.

### `Show(context)`

Show the loaded ad.

**Param:**

| Param          | Type                                            | Description                             |
| -------------- | ----------------------------------------------- | --------------------------------------- |
| OnEarnedReward | [System.Action<[RewardItem](./reward_item.md)>] | Activity where the ad will be displayed |

**Return:** void.

### `IsLoaded()`

Return a boolean that indicates if the ad is loaded or not.

**Return:** boolean.

### `IsFailed()`

Return a boolean that indicates if the failed to load an ad.

**Return:** boolean.
