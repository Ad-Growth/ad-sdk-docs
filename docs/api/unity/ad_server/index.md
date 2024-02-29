---
title: AdServer
sidebar_position: 1
---

static Class for handle SDK initialization and user profile settings.

## Static Methods

### `Initialize(OnInit)`

Initialize the SDK

**Param:**

| Param  | Type            | Description                                  |
| ------ | --------------- | -------------------------------------------- |
| OnInit | [System.Action] | AdServer initialize event listener interface |

**Return:** void.

### `isInitialized` _{ get; }_

Boolean that indicates if the is initialized or not.

**type:** boolean.

### `clientProfile` _{ get; }_

Current ClientProfile object,
you can use this for refine user's ad experience

**type:** [ClientProfile](../client_profile).
