---
title: AdView
sidebar_position: 5
---

Class for displaying on screen banner ad.

## Construtor

### `AdView(context, unitId, size, orientation)`

**Params:**

| Param       | Type                                                    | Description                                                                     |
| ----------- | ------------------------------------------------------- | ------------------------------------------------------------------------------- |
| context     | Context                                                 | Parent view                                                                     |
| unitId      | String                                                  | Registered banner ad unit_id on [AdServer panel](https://adserver.adgrowth.com) |
| size        | [AdSizeType](/docs/api/android/enums/ad_size_type)      | Banners' dimensions size                                                        |
| orientation | [AdOrientation](/docs/api/android/enums/ad_orientation) | Banners' orientation                                                            |

## Methods

### `setListener(listener)`

Set a listener for AdView events

**Param:**

| Param    | Type                                                   | Description                       |
| -------- | ------------------------------------------------------ | --------------------------------- |
| listener | [AdView.Listener](/docs/api/android/rewarded/listener) | Rewarded event listener interface |

**Return:** void.

### `getSize()`

Get banners' current size.

**Return:** String.

### `reload()`

Force refresh banner

**Return:** void.

### `getUnitId()`

Get banners' current unitId.

**Return:** [AdSizeType](/docs/api/android/enums/ad_size_type).

### `getOrientation()`

Get banners' current orientation.

**Return:** [AdOrientation](/docs/api/android/enums/ad_orientation).

### `isLoaded()`

Return a boolean that indicates if the ad is loaded or not.

**Return:** boolean.

### `isFailed()`

Return a boolean that indicates if the failed to load an ad.

**Return:** boolean.
