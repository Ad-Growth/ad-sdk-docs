---
title: Unity
sidebar_position: 1
---

### How to implement on Unity Engine

To integrate with the Unity Engine, you'll need a `unit_id` for the `REWARDED` type, which you can register on your app screen at the [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps).

### IMPORTANT

This type of ad works similarly to the [InterstitialAd](../../category/interstitial/), however there are additional settings when registering the display block.
You can set a reward `item` name and `value`.

#### Instantiate RewardedAd

Once the SDK is initialized, you're ready to instantiate, load, and show rewarded ads in your application.

```csharp

using AdGrowth;

public class MyRewardedAdObject : MonoBehaviour
{
  private RewardedAd ad;

  void Start()
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

### Show your rewarded ad

```csharp
  ad.Show((RewardItem rewardItem) => 
  {
    int value = rewardItem.value;
    String item = rewardItem.item;

    // do something with the registered reward

  });
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
