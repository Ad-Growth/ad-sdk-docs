---
title: AdServer
sidebar_position: 1
---

static Class for handle SDK initialization and user profile settings.

## Static Methods

### `initialize(context, callback)`

Initialize the SDK

**Param:**

| Param      | Type                                       | Description                                                                  |
| ---------- | ------------------------------------------ | ---------------------------------------------------------------------------- |
| context    | Context                                    | Context of application                                                       |
| callback   | [AdServer.Listener](../ad_server/listener) | AdServer initialize event listener interface                                 |

**Return:** void.

### `initialize(context, profile, callback)`

Initialize the SDK with the client profile provided.

**Param:**

| Param      | Type                                       | Description                                                                  |
| ---------- | ------------------------------------------ | ---------------------------------------------------------------------------- |
| context    | Context                                    | Context of application                                                       |
| profile    | [ClientProfile](../client_profile)         | Client profile class for refine the ad experience                            |
| callback   | [AdServer.Listener](../ad_server/listener) | AdServer initialize event listener interface                                 |

**Return:** void.

### `isInitialized()`

Return a boolean that indicates if the is initialized or not.

**Return:** boolean.

### `finish()`

Kill the SDK initialization

**Return:** void.

### `getClientProfile()`

Return the current ClientProfile object,
you can use this for refine user's ad experience

**Return:** [ClientProfile](../client_profile).

### `getAdId()`

Return the device AdId

**Return:** string.
