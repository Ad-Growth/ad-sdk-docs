---
title: Godot
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### How to implement on Godot Engine

To integrate with the Godot Engine, you'll need a `unit_id` for the `REWARDED` type, which you can register on your app screen at the [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps).

### IMPORTANT

This type of ad works similarly to the [InterstitialAd](../../category/interstitial/), however there are additional settings when registering the display block.
You can set a reward `item` name and `value`.

#### Instantiate RewardedAd

Once the SDK is initialized, you're ready to instantiate, load, and show rewarded ads in your application.

<Tabs>
  <TabItem value="csharp" label="C#">

```csharp

using AdGrowth;

public class MyRewardedAdObject : Node
{
  private RewardedAd ad;

  public override void _Ready()
    {
      // each display place on your app need to be registered on AdServer Panel.
      String unit_id = "my_rewarded_unit_id";

      // after initialized SDK
      ad = new RewardedAd(unit_id);

      ad.Load((RewardedAd ad)=>{

        // your ad has been loaded

      });

  }
}
```

  </TabItem>
  <TabItem value="gdscriptv4" label="GDScript v4" default>

```gdscript

var RewardedAdWrapper = load("res://AdServer/RewardedAdWrapper.cs")

func _ready():
  # instantiate a new RewardedAdWrapper class
  var rewarded_ad_wrapper = RewardedAdWrapper.new()

	rewarded_ad_wrapper.connect("OnLoad", _on_load)
	rewarded_ad_wrapper.connect("OnFailedToLoad", _on_failed_to_load)

  # each display place on your app need to be registered on AdServer Panel.
  var unit_id = "my_interstitial_unit_id"

  # pass enums values as string
	rewarded_ad_wrapper.Load(unit_id)

func _on_load():
  print("do something");

func _on_failed_to_load(code, message):
  print("handle it");

```

  </TabItem>
  <TabItem value="gdscriptv3" label="GDScript v3">

```gdscript

var RewardedAdWrapper = load("res://AdServer/RewardedAdWrapper.cs")

func _ready():
  # instantiate a new RewardedAdWrapper class
  var rewarded_ad_wrapper = RewardedAdWrapper.new()

	rewarded_ad_wrapper.connect("OnLoad", self, "_on_load")
	rewarded_ad_wrapper.connect("OnFailedToLoad", self, "_on_failed_to_load")

  # each display place on your app need to be registered on AdServer Panel.
  var unit_id = "my_interstitial_unit_id"

  # pass enums values as string
	rewarded_ad_wrapper.Load(unit_id)

func _on_load():
  print("do something");

func _on_failed_to_load(code, message):
  print("handle it");

```

  </TabItem>
</Tabs>

### Show your rewarded ad

<Tabs>
  <TabItem value="csharp" label="C#">

```csharp
  ad.Show((RewardItem rewardItem) =>
  {
    int value = rewardItem.value;
    String item = rewardItem.item;

    // do something with the registered reward

  });
```

  </TabItem>
  <TabItem value="gdscriptv4" label="GDScript v4" default>

```gdscript

func _on_load():
  rewarded_ad_wrapper.connect("OnEarnedReward", _on_earned_reward);
  rewarded_ad_wrapper.Show()

func _on_earned_reward(item, value):
	print("user rewarded with "str(value) + "x " + item)

```

  </TabItem>
  <TabItem value="gdscriptv3" label="GDScript v3">

```gdscript

func _on_load():
  rewarded_ad_wrapper.connect("OnEarnedReward", self, "_on_earned_reward");
  rewarded_ad_wrapper.Show()

func _on_earned_reward(item, value):
	print("user rewarded with "str(value) + "x " + item)

```

  </TabItem>
</Tabs>

### Events

You can listen other ad events adding lambda functions for each event
<Tabs>
  <TabItem value="csharp" label="C#">

```csharp

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
  };

```

  </TabItem>
  <TabItem value="gdscriptv4" label="GDScript v4" default>

You can listen other ad events connecting on available events **before call Load method**


```gdscript

func _ready():
  var rewarded_ad_wrapper = RewardedAdWrapper.new()
  
  rewarded_ad_wrapper.connect("OnDismissed", _on_dismissed);
  rewarded_ad_wrapper.connect("OnClicked", _on_clicked);
  rewarded_ad_wrapper.connect("OnFailedToShow", _on_failed_to_show);
  rewarded_ad_wrapper.connect("OnImpression", _on_impression);

  rewarded_ad_wrapper.Load(
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
  <TabItem value="gdscriptv3" label="GDScript v3">

You can listen other ad events connecting on available events **before call Load method**


```gdscript

func _ready():
  var rewarded_ad_wrapper = RewardedAdWrapper.new()
  
  rewarded_ad_wrapper.connect("OnDismissed", self, "_on_dismissed");
  rewarded_ad_wrapper.connect("OnClicked", self, "_on_clicked");
  rewarded_ad_wrapper.connect("OnFailedToShow", self, "_on_failed_to_show");
  rewarded_ad_wrapper.connect("OnImpression", self, "_on_impression");

  rewarded_ad_wrapper.Load(
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
