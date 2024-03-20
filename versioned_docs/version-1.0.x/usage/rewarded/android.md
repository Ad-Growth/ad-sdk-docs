---
title: Android
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### How to implement on Android platform

You need to have `unit_id` for `REWARDED` type, register on your app screen at [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps).

### IMPORTANT

This type of ad works similarly to the [InterstitialAd](../../category/interstitial/), however there are additional settings when registering the display block.
You can set a reward `item` name and `value`.

<Tabs>
  <TabItem value="java" label="Java" default>

#### imports

```java
import com.adgrowth.adserver.RewardedAd;
import com.adgrowth.adserver.entities.RewardItem;
import com.adgrowth.adserver.exceptions.AdRequestException;
```

#### instantiate RewardedAd

After the SDK is [initialized](../../category/configuration) you can instantiate, load and show rewarded ads.

```java

public class MainActivity extends AppCompatActivity {

  RewardedAd ad;

  @Override
  public void onInit() {


      // each display place on your app need to be registered on AdServer Panel.
      String unit_id = "my_rewarded_unit_id";

      ad = new RewardedAd(unit_id);

      ad.setListener(new RewardedAd.Listener() {
          // ...same events of LnterstitialAd

          @Override
          public void onLoad(RewardedAd ad) {
              // ad is ready to be showed
          }
          @Override
          public void onEarnedReward(RewardItem reward) {
              int value = rewardItem.getValue();
              String item = rewardItem.getItem()

              // do something with the registered reward
          }


      });

      // load an ad
      ad.load(MainActivity.this);
  }
}

```

### Show your rewarded ad

```java
// pass the current activity
ad.show(MainActivity.this)
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

#### imports

```kotlin
import com.adgrowth.adserver.RewardedAd
import com.adgrowth.adserver.entities.RewardItem
import com.adgrowth.adserver.exceptions.AdRequestException
```

#### instantiate RewardedAd

After the SDK is [initialized](../../category/configuration) you can instantiate, load and show rewarded ads.

```kotlin
class MainActivity : AppCompatActivity(), AdServer.Listener {

  private var ad: RewardedAd? = null

  override fun onInit() {
    // each display place on your app need to be registered on AdServer Panel.
    val unit_id ="my_rewarded_unit_id";

    ad = RewardedAd(unit_id)

    ad?.setListener(object : RewardedAd.Listener {
      // ...same events of InterstitialAd

      override fun onLoad(ad: RewardedAd) {
        // ad is ready to be showed
      }

      override fun onEarnedReward(rewardItem: RewardItem) {
        val value = rewardItem.value
        val item = rewardItem.value
      }
    })

    // load an ad
    ad?.load(this@MainActivity)
  }
}

```

### Show your rewarded ad

```kotlin
  // pass the current activity
  ad.show(this@MainActivity)
```

  </TabItem>
</Tabs>

### Next steps

Check [other ad formats](../../usage/) to implement in your app
