---
title: AdServer
sidebar_position: 1
---

static Class for handle SDK initialization and user profile settings.

## Static Methods

### `initialize(context, client_key, callback)`

Initialize the SDK

**Param:**

| Param      | Type                                                      | Description                                  |
| ---------- | --------------------------------------------------------- | -------------------------------------------- |
| context    | Context                                                   | Context of application                       |
| client_key | String                                                    | App client_key registered on admin panel     |
| callback   | [AdServer.Listener](/docs/api/android/ad_server/listener) | AdServer initialize event listener interface |

**Return:** void.

### `initialize(context, client_key, profile, callback)`

Initialize the SDK with the client profile provided.

**Param:**

| Param      | Type                                                      | Description                                       |
| ---------- | --------------------------------------------------------- | ------------------------------------------------- |
| context    | Context                                                   | Context of application                            |
| client_key | String                                                    | App client_key registered on admin panel          |
| profile    | [ClientProfile](/docs/api/android/client_profile)         | Client profile class for refine the ad experience |
| callback   | [AdServer.Listener](/docs/api/android/ad_server/listener) | AdServer initialize event listener interface      |

**Return:** void.

### `isInitialized()`

Return a boolean that indicates if the is initialized or not.

**Return:** boolean.

### `finish()`

Kill the SDK initialization

**Return:** void.

### `getClientKey()`

Return the initialized client_key

**Return:** String.

### `getUserProfile()`

Return the current ClientProfile object,
you can use this for refine user's ad experience

**Return:** [ClientProfile](/docs/api/android/client_profile).

### `getAdId()`

Return the device AdId

**Return:** string.
