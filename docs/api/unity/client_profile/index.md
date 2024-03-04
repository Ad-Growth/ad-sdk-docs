---
title: ClientProfile
sidebar_position: 2
---

Class for providing user info to refine ad experience.

## Methods

### `AddInterests(interest)`

Add user interest to refine ad targeting.

**Param:**

| Param    | Type   | Description   |
| -------- | ------ | ------------- |
| interest | String | User interest |

**Return:** void.

### `RemoveInterests(interest)`

Remove a user interest from ad targeting.

**Param:**

| Param    | Type   | Description   |
| -------- | ------ | ------------- |
| interest | String | User interest |

**Return:** void.

### `clientAddress` _{ get; }_

ClientAddress object

**Return:** [ClientAddress](../client_profile/client_address).

### `age` _{ get; set; }_

User's current age.

**Return:** int.

### `minAge` _{ get; set; }_

Minimum age of the target age range.

**Return:** int.

### `maxAge` _{ get; set; }_

Maximum age of the target age range.

**Return:** int.

### `gender` _{ get; set; }_

User's gender.

**Return:** [ClientProfile.Gender](../client_profile/gender).
