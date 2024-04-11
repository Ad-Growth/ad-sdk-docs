---
title: ClientProfile
sidebar_position: 2
---

Class for provide user info to refine ad experience.

## Methods

### `setClientAddress(clientAddress)`

Set the client address object

**Param:**

| Param         | Type                                              | Description        |
| ------------- | ------------------------------------------------- | ------------------ |
| clientAddress | [ClientAddress](../client_profile/client_address) | User clientAddress |

**Return:**
void.

### `setInterests(interests)`

Set user interests

**Param:**

| Param     | Type     | Description    |
| --------- | -------- | -------------- |
| interests | String[] | User interests |

**Return:**
void.

### `addInterests(interest)`

Add interest

**Param:**

| Param    | Type   | Description   |
| -------- | ------ | ------------- |
| interest | String | User interest |

**Return:**
void.

### `removeInterests(interest)`

Remove an interest

**Param:**

| Param    | Type   | Description   |
| -------- | ------ | ------------- |
| interest | String | User interest |

**Return:**
void.

### `setAge(age)`

Set user Age

**Param:**

| Param | Type | Description |
| ----- | ---- | ----------- |
| age   | int  | User age    |

**Return:**
void.

### `setMinAge(minAge)`

Set min age for the age range

**Param:**

| Param  | Type | Description  |
| ------ | ---- | ------------ |
| minAge | int  | set a minAge |

**Return:**
void.

### `setMaxAge(maxAge)`

Set max age for the age range

**Param:**

| Param  | Type | Description  |
| ------ | ---- | ------------ |
| maxAge | int  | set a maxAge |

**Return:**
void.

### `setGender(gender)`

Set user gender

**Param:**

| Param  | Type                                             | Description |
| ------ | ------------------------------------------------ | ----------- |
| gender | [ClientProfile.Gender](../client_profile/gender) | User gender |

**Return:**
void.

### `getInterests()`

Return a list of interests

**Return:**
String[].

### `getClientAddress()`

Return ClientAddress. object

**Return:**
[ClientAddress](../client_profile/client_address).

### `getAge()`

Return user age.

**Return:**
int.

### `getMinAge()`

Return min age of age range.

**Return:**
int.

### `getMaxAge()`

Return max age of age range.

**Return:**
int.

### `getGender()`

Return user gender.

**Return:**
[ClientProfile.Gender](../client_profile/gender).
