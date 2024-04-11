---
title: Godot
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### How to implement on Godot Engine

To integrate with the Godot Engine, you'll need a `unit_id` for the `BANNER` type, which you can register on your app screen at the [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps).

### IMPORTANT

When registering or updating your BANNER type ad in the [AdServer Panel](https://adserver.adgrowth.com/mfe-apps/apps), it is possible to configure the banner `refresh rate`

### Usage

Use the AdView component to render banner advertisements in your game view:

you must use the some enums to configure your banner on screen:

- [AdSize](../../api/game_engines/enums/ad_size) enum to define the size of the banner;
- [AdOrientation](../../api/game_engines/enums/ad_orientation) to define the orientation of your banner and
- [AdPosition](../../api/game_engines/enums/ad_position) to define the location where the banner will be rendered.
- You would pass a x or y on AdView overload for custom position on screen.

<Tabs>
  <TabItem value="csharp" label="C#">

```csharp
using AdGrowth;
using AdGrowth.Enums;
using AdGrowth.Exceptions;

public class MyAdViewObject : Node
{
  private AdView ad;

  void Start()
    {
      // each display place on your app need to be registered on AdServer Panel.
      String unit_id = "my_banner_unit_id";

      // use AdPosition to define the banner position on screen
      AdView ad = new AdView(
        unit_id,
        AdSize.BANNER,
        AdOrientation.LANDSCAPE,
        AdPosition.TOP_CENTER
        );

      // Or pass x and y position on screen
      AdView customPositionAd = new AdView(
        unit_id,
        AdSize.BANNER,
        AdOrientation.LANDSCAPE,
        150,  // x
        100   // y
        );

      ad.Load(); // the banner will be added to screen
      customPositionAd.Load(); // the banner will be added to screen at the provided x and y position

  }
}

```

</TabItem>
 <TabItem value="gdscript" label="GDScript" default>

```gdscript
var AdViewWrapper = load("res://AdServer/AdViewWrapper.cs")

func _ready():
  # instantiate a new AdViewWrapper class
  var ad_view_wrapper = AdViewWrapper.new()

  # each display place on your app need to be registered on AdServer Panel.
  var unit_id = "my_banner_unit_id"

  # pass enums values as string
	ad_view_wrapper.Load(
    unit_id,
    "BANNER", # AdSize
    "LANDSCAPE", # AdOrientation
    "TOP_CENTER" # AdPosition
  )

  # Or pass x and y position on screen
  ad_view_wrapper.Load(
    unit_id,
    "BANNER", # AdSize
    "LANDSCAPE", # AdOrientation
    150, # x
    100  # y
  )


```

  </TabItem>
</Tabs>

### Events

<Tabs>
  <TabItem value="csharp" label="C#">


You can listen ad events adding lambda functions for each event

```csharp

  ad.OnLoad += (IAdView ad) =>
  {
    // do something
  };
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

You can listen ad events connecting on available events **before call Load method**

```gdscript

func _ready():
  var ad_view_wrapper = AdViewWrapper.new()
  ad_view_wrapper.connect("OnLoad", _on_load);
  ad_view_wrapper.connect("OnFailedLoad", _on_failed_to_load);
  ad_view_wrapper.connect("OnDismissed", _on_dismissed);
  ad_view_wrapper.connect("OnClicked", _on_clicked);
  ad_view_wrapper.connect("OnFailedToShow", _on_failed_to_show);
  ad_view_wrapper.connect("OnImpression", _on_impression);
  ad_view_wrapper.Load(
    # ... args
  )

func _on_load():
  print("do something");

func _on_failed_to_load(code, message):
  print("handle it");

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
  <TabItem value="gdscriptv3" label="GDScript v3" default>

You can listen ad events connecting on available events **before call Load method**

```gdscript

func _ready():
  var ad_view_wrapper = AdViewWrapper.new()
  ad_view_wrapper.connect("OnLoad", self, "_on_load");
  ad_view_wrapper.connect("OnFailedLoad", self, "_on_failed_to_load");
  ad_view_wrapper.connect("OnDismissed", self, "_on_dismissed");
  ad_view_wrapper.connect("OnClicked", self, "_on_clicked");
  ad_view_wrapper.connect("OnFailedToShow", self, "_on_failed_to_show");
  ad_view_wrapper.connect("OnImpression", self, "_on_impression");
  ad_view_wrapper.Load(
    # ... args
  )

func _on_load():
  print("do something");

func _on_failed_to_load(code, message):
  print("handle it");

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

## Safe Area

When defining the location of the banner, you may encounter problems with system buttons or notches overlapping. For this we have a method in AdView where it adds a safety margin so that the banner is not rendered under these elements. Just call it in the instance;

<Tabs>
  <TabItem value="csharp" label="C#">

```csharp
  // Call EnableSafeArea for enable/disable
  ad.EnableSafeArea(true)
  
  ad.Load();

```

  </TabItem>
  <TabItem value="gdscript" label="GDScript" default>

```gdscript

func _ready():
  var ad_view_wrapper = AdViewWrapper.new()
  # Call EnableSafeArea for enable/disable
  ad_view_wrapper.EnableSafeArea(true)

  ad_view_wrapper.Load(
    # ... args
  )


```

 </TabItem>
</Tabs>

![safeareainsets](https://github.com/Ad-Growth/ad-sdk-docs/assets/78423625/ffa6fa76-df61-419d-b50a-6b1463fd4af8)

The same will be done if the orientation is landscape.

### Next steps

Check [other ad formats](../../usage/) to implement in your app
