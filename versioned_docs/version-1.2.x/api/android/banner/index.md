---
title: AdView
sidebar_position: 5
---

Class for displaying on screen banner ad.

## Construtor

### `AdView(context, unitId, size, orientation)`

**Params:**

| Param       | Type                                     | Description                                                                     |
| ----------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| context     | Context                                  | Parent view                                                                     |
| unitId      | String                                   | Registered banner ad unit_id on [AdServer panel](https://adserver.adgrowth.com) |
| size        | [AdSize](../enums/ad_size)               | Banners' dimensions size                                                        |
| orientation | [AdOrientation](../enums/ad_orientation) | Banners' orientation                                                            |

## Methods

### `setListener(listener)`

Set a listener for AdView events

**Param:**

| Param    | Type                                  | Description                     |
| -------- | ------------------------------------- | ------------------------------- |
| listener | [AdView.Listener](../banner/listener) | AdView event listener interface |

**Return:** void.

### `getSize()`

Get banners' current size.

**Return:** String.

### `reload()`

Force refresh banner

**Return:** void.

### `getUnitId()`

Get banners' current unitId.

**Return:** [AdSize](../enums/ad_size).

### `getOrientation()`

Get banners' current orientation.

**Return:** [AdOrientation](../enums/ad_orientation).

### `isLoaded()`

Return a boolean that indicates if the ad is loaded or not.

**Return:** boolean.

### `isFailed()`

Return a boolean that indicates if the failed to load an ad.

**Return:** boolean.
