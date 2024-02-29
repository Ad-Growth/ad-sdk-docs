---
title: AdView
sidebar_position: 5
---

Class for displaying on screen banner ad.

## Construtor

### `AdView(context, unitId, size, orientation, position)`

**Params:**

| Param       | Type                                     | Description                                                                     |
| ----------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| context     | Context                                  | Parent view                                                                     |
| unitId      | String                                   | Registered banner ad unit_id on [AdServer panel](https://adserver.adgrowth.com) |
| size        | [AdSize](../enums/ad_size)               | Banners' dimensions size                                                        |
| orientation | [AdOrientation](../enums/ad_orientation) | Banners' orientation                                                            |
| position    | [AdPosition](../enums/ad_position)       | Banners' position on screen                                                     |

## Construtor

### `AdView(context, unitId, size, orientation, x, y)`

**Params:**

| Param       | Type                                     | Description                                                                     |
| ----------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| context     | Context                                  | Parent view                                                                     |
| unitId      | String                                   | Registered banner ad unit_id on [AdServer panel](https://adserver.adgrowth.com) |
| size        | [AdSize](../enums/ad_size)               | Banners' dimensions size                                                        |
| orientation | [AdOrientation](../enums/ad_orientation) | Banners' orientation                                                            |
| x           | int                                      | Banners' horizontal position on screen                                          |
| y           | int                                      | Banners' vertical position on screen                                            |

### `Load()`

Put Banner on screen and start loading

**Return:** void.

### `Reload()`

Force refresh banner

**Return:** void.

### `IsLoaded()`

Return a boolean that indicates if the ad is loaded or not.

**Return:** boolean.

### `IsFailed()`

Return a boolean that indicates if the failed to load an ad.

**Return:** boolean.

### `Destroy()`

Remove banner from screen.

**Return:** void.
