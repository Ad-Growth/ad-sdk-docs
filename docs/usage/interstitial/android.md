---
sidebar_position: 0
title: Android
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### How to implement on Android platform

You need to have `unit_id` for `INTERSTITIAL` type, register on your app screen at [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps)

<Tabs>
  <TabItem value="java" label="Java" default>

#### imports

```java
import com.adgrowth.adserver.InterstitialAd;
import com.adgrowth.adserver.exceptions.AdRequestException;
```

#### instantiate InterstitialAd

After the SDK is initialized you can instantiate, load and show interstitial ads.

```java
public class MainActivity extends AppCompatActivity {

  InterstitialAd ad;

  // after initialized SDK
  @Override
  public void onInit() {
      // each display place on your app need to be registered on AdServer Panel.
      String unit_id = "my_interstitial_unit_id";


      ad = new InterstitialAd(unit_id);

      ad.setListener(new InterstitialAd.Listener() {
          @Override
          public void onClicked() {
          }

          @Override
          public void onDismissed() {
              ad = null; // destroy the ad after consumed
          }

          @Override
          public void onImpression() {
          }

          @Override
          public void onFailedToLoad(AdRequestException exception) {
          }

          @Override
          public void onFailedToShow(String code) {
          }

          @Override
          public void onLoad(InterstitialAd ad) {
              // ad is ready to be showed
          }
      });

      // load an ad
      ad.load(MainActivity.this);
  }
}
```

### Show your interstitial ad

```java
  // pass the current activity
  ad.show(MainActivity.this);
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

#### imports

```kotlin
import com.adgrowth.adserver.InterstitialAd
import com.adgrowth.adserver.exceptions.AdRequestException
```

#### instantiate InterstitialAd

After the SDK is initialized you can instantiate, load and show interstitial ads.

```kotlin
class MainActivity : AppCompatActivity(), AdServer.Listener {

  private var ad: InterstitialAd? = null

  // after initialized SDK
  override fun onInit() {
    // each display place on your app need to be registered on AdServer Panel.
    val unit_id = "my_interstitial_unit_id"

    ad = InterstitialAd(unit_id)

    ad?.setListener(object : InterstitialAd.Listener {
      override fun onClicked() {}

      override fun onDismissed() {
          ad = null // destroy the ad after consumed
      }

      override fun onImpression() {}

      override fun onFailedToLoad(exception: AdRequestException) {}

      override fun onFailedToShow(code: String) {}

      override fun onLoad(ad: InterstitialAd) {
          // ad is ready to be showed
      }
    })

    // load an ad
    ad?.load(this@MainActivity)
  }
}
```

### Show your interstitial ad

```kotlin
  // pass the current activity
  ad.show(this@MainActivity)
```

  </TabItem>
</Tabs>

### Next steps

Check [other ad formats](../../usage/) to implement in your app
