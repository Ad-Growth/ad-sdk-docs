---
sidebar_position: 4
title: Unity
---

### How to implement on Unity Engine

You need to have `unit_id` for `INTERSTITIAL` type, register on your app screen at [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps)

#### instantiate InterstitialAd

After the SDK is initialized you can instantiate, load and show interstitial ads.

```csharp

using AdGrowth;

public class MyInterstitialAdObject : MonoBehaviour
{
  private InterstitialAd ad;

  void Start()
    {
      // each display place on your app need to be registered on AdServer Panel.
      String unit_id = "my_interstitial_unit_id";

      // after initialized SDK
      ad = new InterstitialAd(unit_id);

      ad.Load((InterstitialAd ad)=>{
        // your ad has been loaded
      })

  }
}
```

### Show your interstitial ad

```csharp
  ad.Show();
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
