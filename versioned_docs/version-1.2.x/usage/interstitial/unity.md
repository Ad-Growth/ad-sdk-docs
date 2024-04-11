---
sidebar_position: 1
title: Unity
---

### How to implement on Unity Engine

To integrate with the Unity Engine, you'll need a `unit_id` for the `INTERSTITIAL` type, which you can register on your app screen at the [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps).

#### Instantiate InterstitialAd

Once the SDK is initialized, you're ready to instantiate, load, and show interstitial ads in your application.

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

      ad.Load((IInterstitialAd interstitialAd)=>{
        // your ad has been loaded
      });

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

### Next steps

Check [other ad formats](../../usage/) to implement in your app
