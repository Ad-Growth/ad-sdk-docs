---
title: Android
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### How to implement on Android platform

You need to have unit_id for BANNER type, register on your app screen at [AdServer panel](https://adserver.adgrowth.com/mfe-apps/apps)

### IMPORTANT

When registering or updating your BANNER type ad in the [AdServer Panel](https://adserver.adgrowth.com/mfe-apps/apps), it is possible to configure the banner `refresh rate`

### Usage

Use the AdView component to render banner advertisements in your xml view only after the SDK is initialized:

```xml
<com.adgrowth.adserver.views.AdView
   xmlns:ads="http://schemas.android.com/apk/res-auto"
   ads:orientation="landscape"
   ads:size="large_banner"
   ads:unit_id="main_screen_banner"
   android:id="@+id/my_layout"
   android:layout_width="match_parent"
   android:layout_height="50dp" />
```

You can add an AdView to your view programmatically with

<Tabs>
  <TabItem value="java" label="Java" default>

#### import AdView and enums

```java
import com.adgrowth.adserver.views.AdView;
import com.adgrowth.adserver.enums.AdOrientation;
import com.adgrowth.adserver.enums.AdSize;
import com.adgrowth.adserver.exceptions.AdRequestException;
```

#### instantiate AdView with context, unit_id and layout settings

```java

public class MainActivity extends AppCompatActivity {

  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    ViewGroup myContainer = findViewById(R.id.ad_view_container);

       // this must be registered on adserver panel
    String unit_id =  "my_banner_unit_id";

    AdView adView = new AdView(this, unit_id, AdSize.FULL_BANNER, AdOrientation.LANDSCAPE);

    // set your adView width and height
    adView.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 128));

    // add to your layout
    myContainer.addView(adView);

  }

}

```

#### You can implement `AdView.Listener` to listen ad events

implement listener on class

```java

public class MyActivity extends AppCompatActivity implements AdView.Listener {
  protected void onCreate(Bundle savedInstanceState) {

    // ...previous logic

    // set AdView.Listener
    adView.setListener(this);

    // add to your layout
    myContainer.addView(adView);
  }

  @Override
  public void onLoad(AdView ad) {}

  @Override
  public void onFailedToLoad(AdRequestException exception) {}

  @Override
  public void onImpression() {}

  @Override
  public void onFailedToShow(String code) {}

  @Override
  public void onClicked() {}
}

```

or instantiate directly

```java
  adView.setListener(new AdView.Listener() {
    @Override
    public void onLoad(AdView ad) {
      //  ad loaded successfully
    }
    // rest of events
  });
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin">

#### import AdView and enums

```kotlin
import com.adgrowth.adserver.views.AdView
import com.adgrowth.adserver.enums.AdOrientation
import com.adgrowth.adserver.enums.AdSize
import com.adgrowth.adserver.exceptions.AdRequestException
```

#### instantiate AdView with context, unit_id and layout settings

```kotlin
class MainActivity : AppCompatActivity() {

   override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState);

    val myContainer = findViewById<ViewGroup>(R.id.ad_view_container);

    // this must be registered on adserver panel
    val unit_id = "my_banner_unit_id"

    val adView = AdView(this, unit_id, AdSize.FULL_BANNER, AdOrientation.LANDSCAPE)

    // set your adView width and height
    adView.layoutParams = ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,128)

    // add to your layout
    myContainer.addView(adView)

  }

}

```

#### You can implement `AdView.Listener` to listen ad events

implement listener on class

```kotlin
public class MyActivity extends AppCompatActivity implements AdView.Listener {
  protected void onCreate(Bundle savedInstanceState) {

    // ...previous logic

    // set AdView.Listener
    adView.setListener(this);

    // add to your layout
    myContainer.addView(adView);
  }

  override fun onLoad(ad: AdView) {}

  override fun onFailedToLoad(e: AdRequestException?) {}

  override fun onImpression() {}

  override fun onFailedToShow(code: String?) {}

  override fun onClicked() {}
}
```

or instantiate directly

```kotlin
  adView.setListener(object : AdView.Listener {
    override fun onLoad(ad: AdView?) {
      //  ad loaded successfully
    }

    // rest of events
  });
```

  </TabItem>
</Tabs>

### Next steps

Check [other ad formats](../../usage) to implement in your app
