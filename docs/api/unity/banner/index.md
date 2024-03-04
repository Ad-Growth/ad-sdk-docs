---
title: AdView
sidebar_position: 5
---

Class for displaying on screen banner ad.

## Constructor

### `AdView(context, unitId, size, orientation, position)`

**Params:**

| Param       | Type                                     | Description                                                                     |
| ----------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| context     | Context                                  | Parent view                                                                     |
| unitId      | String                                   | Registered banner ad unit_id on [AdServer panel](https://adserver.adgrowth.com) |
| size        | [AdSize](../enums/ad_size)               | Banner's dimensions size                                                        |
| orientation | [AdOrientation](../enums/ad_orientation) | Banner's orientation                                                            |
| position    | [AdPosition](../enums/ad_position)       | Banner's position on screen                                                     |

## Constructor

### `AdView(context, unitId, size, orientation, x, y)`

**Params:**

| Param       | Type                                     | Description                                                                     |
| ----------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| context     | Context                                  | Parent view                                                                     |
| unitId      | String                                   | Registered banner ad unit_id on [AdServer panel](https://adserver.adgrowth.com) |
| size        | [AdSize](../enums/ad_size)               | Banner's dimensions size                                                        |
| orientation | [AdOrientation](../enums/ad_orientation) | Banner's orientation                                                            |
| x           | int                                      | Banner's horizontal position on screen                                          |
| y           | int                                      | Banner's vertical position on screen                                            |

### `Load()`

Display the banner on the screen and start loading.

**Return:** void.

### `Reload()`

Force refresh banner

**Return:** void.

### `IsLoaded()`

Return a boolean indicating whether the ad is loaded.

**Return:** boolean.

### `IsFailed()`

Return a boolean indicating whether the ad failed to load.

**Return:** boolean.

### `Destroy()`

Remove banner from screen.

**Return:** void.
