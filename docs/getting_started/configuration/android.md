---
title: Android
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Configuration

Before using any resource, it is necessary to initialize the SDK properly.

For this you need to have the `client_key` at hand, you can get your `client_key` by registering the app in the admin panel.

<Tabs>
  <TabItem value="java" label="Java" default>

### import the static class `AdServer` to initialize SDK

```java
import com.adgrowth.adserver.AdServer;
import com.adgrowth.adserver.exceptions.SDKInitException;
```

### Initialize

```java
public class MainActivity extends AppCompatActivity {

  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // get the client_key registering the app on Adserver Panel
    String client_key = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

    AdServer.initialize(this, client_key, new AdServer.Listener() {
        @Override
        public void onInit() {
          // you are ready to use ads
        }

        @Override
        public void onFailed(SDKInitException e) {
          // failed to initialize, handle it
        }
    });
  }
}
```

### Client Profile

You can pass an user profile on AdServer `initialize` method

```java
  ClientProfile profile = new ClientProfile();

  // add user's age
  profile.setAge(16);
  // or provide a range
  profile.setMinAge(13);
  profile.setMaxAge(16);

  // set user gender
  profile.setGender(ClientProfile.Gender.FEMALE);

  // add or remove user interests
  profile.addInterest("games");
  profile.addInterest("adventure_games");

  profile.addInterest("movies");

  profile.removeInterest("movies");

  // pass the profile on initialize method
  AdServer.initialize(this, client_key, profile, new AdServer.Listener() {
      // ...
  });

  // or get the current profile and modify it if the SDK is already initialized
  mProfile = AdServer.getUserProfile();
```

### Localization

You can add user's address or location on anytime to provide a better localized ad experience

```java
  ClientAddress address = profile.getClientAddress();

  // if your app have acess to user location
  address.setLatitude(40.68905007092866);
  address.setLongitude(-74.04438969510598);

  // or you can provide a country, state and/or city
  address.setCountry("US");
  address.setState("NW");
  address.setState("New york");
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

### import the static class `AdServer` to initialize SDK

```kotlin
import com.adgrowth.adserver.AdServer
import com.adgrowth.adserver.exceptions.SDKInitException
```

### Initialize

```kotlin
class MainActivity : AppCompatActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    // get the client_key registering the app on Adserver Panel
    val clientKey = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

    AdServer.initialize(this, clientKey, object : AdServer.Listener {
      override fun onInit() {
        // you are ready to use ads
      }

      override fun onFailed(e: SDKInitException?) {
        // failed to initialize, handle it
      }
    })

  }
}
```

### Client Profile

You can pass an user profile on AdServer `initialize` method

```kotlin
  ClientProfile profile = new ClientProfile();

  val profile = ClientProfile()

  // add user's age
  profile.age = 16

  // or provide a range
  profile.minAge = 13
  profile.maxAge = 16

  // set user gender
  profile.gender = ClientProfile.Gender.FEMALE

  // add or remove user interests
  profile.addInterest("games")
  profile.addInterest("adventure_games")

  profile.addInterest("movies")

  profile.removeInterest("movies")

  // pass the profile on initialize method
  AdServer.initialize(this, clientKey, profile, object : AdServer.Listener {
      // ...
  });

  // or get the current profile and modify it if the SDK is already initialized
  mProfile = AdServer.getUserProfile();
```

### Localization

You can add user's address or location on anytime to provide a better localized ad experience

```kotlin
  val address = profile.clientAddress

  // if your app have acess to user location
  address.latitude = 40.68905007092866
  address.longitude = -74.04438969510598

  // or you can provide a country, state and/or city
  address.country = "US"
  address.state = "NW"
  address.state = "New york"
```

  </TabItem>
</Tabs>

### Usage

Once configured you can check the [usage](/docs/usage) for ad implementation
