---
title: Unity
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Configuration

Before using any resource, it is necessary to initialize the SDK properly.

For this you need to have the app keys at hand, you can get your keys by registering the app in the [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps).

In the AdServer panel you will have 2 types of keys, Development and Production. We strongly recommend that you **only use production keys when compiling your app for distribution**.
​

You must add these two keys on AdServer Settings panel

- On your editor go to `Window > AdServer Settings`
- Put your production keys here, or keep it while development
  ![3](https://github.com/Ad-Growth/ad-sdk-unity/assets/78423625/80c5eb31-e368-4dc0-82e2-21e76122e7f5)

- Click `Save` to save current configs.

### IMPORTANT

This plugin on Android only works for **24+ API Level**, so you have to do some more settings​

- Open File > Build Settings
- Click on Android and click Switch Platform
- Click on Player Settings<br/>
  ![1](https://github.com/Ad-Growth/ad-sdk-unity/assets/78423625/9ffc6e3a-2772-4a2d-b823-b859540993a3)
- Roll to `Other Settings` and set `Minimum API Level to 24` or more recent.
  ![2](https://github.com/Ad-Growth/ad-sdk-unity/assets/78423625/10ec5ca4-d541-4a8c-b1af-e82926df04c0)

### Initializing

Now you can initialize the plug-in using AdServer class.
Create a game object and add a C# class `AdServerInitializer` to it

Add `AdGrowth` namespace on top of your file.

```csharp
using AdGrowth;
```

On Start method you must use AdServer.Initialize method to initialize the plug-in.
You should pass a lambda function to listen initialization and failed events.

```csharp
public class AdServerInitializer : MonoBehaviour
{
    void Start()
    {
        AdServer.Initialize(() =>
        {
           // Plug-in initialized!
        }, (SDKInitException exception) =>
        {
            // handle it
        });
    }
}
```

### Client Profile

You can customize the ClientProfile on any moment of runtime

```csharp

  AdServer.clientProfile.clientAddress.city = "";
  AdServer.clientProfile.age = 16;

  // add user's age
  AdServer.clientProfile.age = 16;

  // or provide a range
  AdServer.clientProfile.minAge = 13;
  AdServer.clientProfile.maxAge = 65;

  // set user gender
  AdServer.clientProfile.gender = IClientProfile.Gender.FEMALE;

  // add or remove user interests
  AdServer.clientProfile.AddInterest("games");
  AdServer.clientProfile.AddInterest("movies");

  AdServer.Initialize(() => {
    // initialized


    // you can do it anytime
    AdServer.clientProfile.age = 25
    AdServer.clientProfile.AddInterest("adventure_games");

    AdServer.clientProfile.RemoveInterest("movies");
  }, (e) => { })

```

### Localization

You can add user's address or location on anytime to provide a better localized ad experience

```csharp

  // if your app have acess to user location
  AdServer.clientProfile.clientAddress.latitude = 40.68905007092866;
  AdServer.clientProfile.clientAddress.longitude = -74.04438969510598;

  // or you can provide a country, state and/or city
  AdServer.clientProfile.clientAddress.country = "US";
  AdServer.clientProfile.clientAddress.state = "NW";
  AdServer.clientProfile.clientAddress.city = "New york";
```

### Usage

Once configured you can check the [usage](../../usage) for ad implementation
