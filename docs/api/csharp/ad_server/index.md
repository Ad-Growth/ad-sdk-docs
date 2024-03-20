---
title: AdServer
sidebar_position: 1
---

static Class for handling SDK Initialization and user profile settings.

## Static Methods

### `Initialize(OnInit)`

Initializes the SDK

**Param:**

| Param  | Type            | Description                                  |
| ------ | --------------- | -------------------------------------------- |
| OnInit | [System.Action] | AdServer initialize event listener interface |

**Return:** void.

### `isInitialized` _{ get; }_

Boolean indicating whether the SDK is initialized or not.

**type:** boolean.

### `clientProfile` _{ get; }_

Current ClientProfile object,
you can use this to refine the user's ad experience.

**type:** [ClientProfile](../client_profile).
