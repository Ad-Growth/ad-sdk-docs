---
title: Unity
sidebar_position: 4
---

### How to implement on Unity Engine

To integrate with the Unity Engine, you'll need a `unit_id` for the `BANNER` type, which you can register on your app screen at the [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps).

### IMPORTANT

When registering or updating your BANNER type ad in the [AdServer Panel](https://adserver.adgrowth.com/mfe-apps/apps), it is possible to configure the banner `refresh rate`

### Usage

Use the AdView component to render banner advertisements in your game view only after the SDK is initialized:

you must use the some enums to configure your banner on screen:

- [AdSize](../../api/unity/enums/ad_size.md) enum to define the size of the banner;
- [AdOrientation](../../api/unity/enums/ad_orientation.md) to define the orientation of your banner and
- [AdPosition](../../api/unity/enums/ad_position.md) to define the location where the banner will be rendered.
- You would pass a x or y on AdView overload for custom position on screen.

```csharp
using AdGrowth;

public class MyAdViewObject : MonoBehaviour
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

### Events
You can listen ad events adding lambda functions for each event

```csharp
void ConfigureEvents(InterstitialAd ad) {
  InterstitialAd ad = new InterstitialAd(unit_id);

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

### Next steps

Check [other ad formats](../../usage) to implement in your app

