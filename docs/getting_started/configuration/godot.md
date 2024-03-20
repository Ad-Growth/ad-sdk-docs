---
title: Godot
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Configuration

Before using any resource, it is necessary to initialize the SDK properly.

For this you need to have the app keys at hand, you can get your keys by registering the app in the [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps).

In the AdServer panel you will have two types of keys, Development and Production. We strongly recommend that you **only use production keys when compiling your app for distribution**.
​

With the Android Custom Template installed according to [installation guide](../installation/godot) you must open the file `./android/build/AndroidManifest.xml` at the root of your project and add the keys inside the tag`<application>`

```xml
<application>

  <!-- ⬇ Add me ⬇ -->

  <meta-data
    android:name="com.adgrowth.adserver.CLIENT_KEY"
    android:value="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"/>
  <meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"/>

  <!-- ⬆ Add me ⬆ -->

</application>
```

### Initializing

<Tabs>
  <TabItem value="csharp" label="C#" default>

Now you can initialize the plug-in using AdServer class.
Create a game object that extends `Node` and add a C# class `AdServerInitializer` to it

Add `AdGrowth` namespace on top of your file.

`AdServerInitializer.cs`

```csharp
using AdGrowth;
```

On Start method you must use AdServer.Initialize method to initialize the plug-in.
You should pass a lambda function to listen initialization and failed events.

`AdServerInitializer.cs`

```csharp
public partial class AdServerInitializer : Node
{

    // Called when the node enters the scene tree for the first time.
    public override void _Ready()
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

  </TabItem>
  <TabItem value="gdscript" label="GDScript">

Now you can initialize the plug-in using AdServer class.
Create a game object that extends `Node` into your first SceneTree and add a GDScript file `AdServerInitializer` to it

Import and add a `AdServerWrapper` reference on top or your file.

`AdServerInitializer.gd`

```gdscript
extends Node

var AdServerWrapper = load("res://AdServer/AdServerWrapper.cs")
```

On `_ready` method you must instantiate the wrapper class and use Initialize method to initialize the plug-in.

You should connect OnInit and OnFailed to listen initialization and failed events.

`AdServerInitializer.gd`

```gdscript
func _ready():
	var ad_server_wrapper = AdServerWrapper.new()
	ad_server_wrapper.connect("OnInit", self, "_on_init")
	ad_server_wrapper.connect("OnFailed", self, "_on_failed")
	ad_server_wrapper.Initialize()

func _on_init():
	print("Plug-in initialized!")

func _on_failed(code, message):
	print("Initialization failed with error code: " + code + ", handle it")

```

  </TabItem>
</Tabs>

### (Optional) Client Profile

You can customize the ClientProfile on any moment of runtime

<Tabs>
  <TabItem value="csharp" label="C#" default>

`AdServerInitializer.cs`

```csharp
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

  </TabItem>
  <TabItem value="gdscript" label="GDScript">

`AdServerInitializer.gd`

```gdscript
  # add user's age
  ad_server_wrapper.clientProfile.age = 16;

  # or provide a range
  ad_server_wrapper.clientProfile.minAge = 13;
  ad_server_wrapper.clientProfile.maxAge = 65;

  # set user gender
  ad_server_wrapper.clientProfile.gender = "FEMALE";

  # add or remove user interests
  ad_server_wrapper.clientProfile.AddInterest("games");
  ad_server_wrapper.clientProfile.AddInterest("movies");

func _on_init():

    # you can do it anytime
    ad_server_wrapper.clientProfile.age = 25
    ad_server_wrapper.clientProfile.AddInterest("adventure_games")

    ad_server_wrapper.clientProfile.RemoveInterest("movies")

```

 </TabItem>
</Tabs>

### (Optional) Localization

You can add user's address or location on anytime to provide a better localized ad experience

<Tabs>
  <TabItem value="csharp" label="C#" default>

`AdServerInitializer.cs`

```csharp

  // if your app have acess to user location
  AdServer.clientProfile.clientAddress.latitude = 40.68905007092866;
  AdServer.clientProfile.clientAddress.longitude = -74.04438969510598;

  // or you can provide a country, state and/or city
  AdServer.clientProfile.clientAddress.country = "US";
  AdServer.clientProfile.clientAddress.state = "NW";
  AdServer.clientProfile.clientAddress.city = "New york";
```

  </TabItem>
  <TabItem value="gdscript" label="GDScript">

```gdscript

  # if your app have acess to user location
  ad_server_wrapper.clientProfile.clientAddress.latitude = 40.68905007092866;
  ad_server_wrapper.clientProfile.clientAddress.longitude = -74.04438969510598;

  # or you can provide a country, state and/or city
  ad_server_wrapper.clientProfile.clientAddress.country = "US";
  ad_server_wrapper.clientProfile.clientAddress.state = "NW";
  ad_server_wrapper.clientProfile.clientAddress.city = "New york";
```

  </TabItem>
</Tabs>

### Usage

Once configured you can check the [usage](../../usage/) for ad implementation
