---
sidebar_position: 2
title: Godot
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### How to implement on Godot Engine

To integrate with the Godot Engine, you'll need a `unit_id` for the `INTERSTITIAL` type, which you can register on your app screen at the [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps).

#### Instantiate InterstitialAd

Once the SDK is initialized, you're ready to instantiate, load, and show interstitial ads in your application.

<Tabs>
  <TabItem value="csharp" label="C#" default>

```csharp

using AdGrowth;
using AdGrowth.Exceptions;

public class MyInterstitialAdObject : Node
{
  private InterstitialAd ad;

  public override void _Ready()
    {
      // each display place on your app need to be registered on AdServer Panel.
      String unit_id = "my_interstitial_unit_id";

      // after initialized SDK
      ad = new InterstitialAd(unit_id);

      ad.Load((InterstitialAd interstitialAd)=>{
        // your ad has been loaded
      });

  }
}
```

  </TabItem>
  <TabItem value="gdscript" label="GDScript">

```gdscript

var InterstitialAdWrapper = load("res://AdServer/InterstitialAdWrapper.cs")

func _ready():
  # instantiate a new InterstitialAdWrapper class
  var interstitial_ad_wrapper = InterstitialAdWrapper.new()

	interstitial_ad_wrapper.connect("OnLoad", self, "_on_load")
	interstitial_ad_wrapper.connect("OnFailedToLoad", self, "_on_failed_to_load")

  # each display place on your app need to be registered on AdServer Panel.
  var unit_id = "my_interstitial_unit_id"

  # pass enums values as string
	interstitial_ad_wrapper.Load(unit_id)

func _on_load():
  print("do something");

func _on_failed_to_load(code, message):
  print("handle it");

```

  </TabItem>
</Tabs>

### Show your interstitial ad

<Tabs>
  <TabItem value="csharp" label="C#" default>

```csharp
  ad.Show();
```

  </TabItem>
  <TabItem value="gdscript" label="GDScript">

```csharp
  interstitial_ad_wrapper.Show();
```

  </TabItem>
</Tabs>

### Events

You can listen other ad events adding lambda functions for each event
<Tabs>
  <TabItem value="csharp" label="C#" default>

```csharp
void ConfigureEvents(InterstitialAd ad) {

  ad.OnFailedToLoad += (AdRequestException exception) =>
  {
    // handle it
  };
  ad.OnDismissed += () =>
  {
    // on dismiss
  };
  ad.OnClicked += () =>
  {
    // ad clicked
  };
  ad.OnFailedToShow +=  (string code) =>
  {
    // failed to show ad
  };
  ad.OnImpression += () =>
  {
    // ad impression registered
  }
}
```

 </TabItem>
  <TabItem value="gdscript" label="GDScript">


You can listen other ad events connecting on available events **before call Load method**


```gdscript

func _ready():
  var interstitial_ad_wrapper = InterstitialAdWrapper.new()
  
  interstitial_ad_wrapper.connect("OnDismissed", self, "_on_dismissed");
  interstitial_ad_wrapper.connect("OnClicked", self, "_on_clicked");
  interstitial_ad_wrapper.connect("OnFailedToShow", self, "_on_failed_to_show");
  interstitial_ad_wrapper.connect("OnImpression", self, "_on_impression");

  interstitial_ad_wrapper.Load(
    # ... args
  )

func _on_dismissed():
  print("on dismiss");

func _on_clicked():
  print("ad clicked");

func _on_failed_to_show(code):
  print("failed to show ad");

func _on_impression():
  print("ad impression registered");

```

  </TabItem>
</Tabs>

### Next steps

Check [other ad formats](../../usage/) to implement in your app
