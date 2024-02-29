---
title: ClientProfile
sidebar_position: 2
---

Class for provide user info to refine ad experience.

## Methods

### `AddInterests(interest)`

Add interest

**Param:**

| Param    | Type   | Description   |
| -------- | ------ | ------------- |
| interest | String | User interest |

**Return:** void.

### `RemoveInterests(interest)`

Remove an interest

**Param:**

| Param    | Type   | Description   |
| -------- | ------ | ------------- |
| interest | String | User interest |

**Return:** void.

### `clientAddress` _{ get; }_

ClientAddress. object

**Return:** [ClientAddress](../client_profile/client_address).

### `age` _{ get; set; }_

User age.

**Return:** int.

### `minAge` _{ get; set; }_

Min age of age range.

**Return:** int.

### `maxAge` _{ get; set; }_

Max age of age range.

**Return:** int.

### `gender` _{ get; set; }_

User gender.

**Return:** [ClientProfile.Gender](../client_profile/gender).
