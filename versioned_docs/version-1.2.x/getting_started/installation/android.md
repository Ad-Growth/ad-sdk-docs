---
title: Android
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### Install

How to add this library to your android project

<Tabs>
 <TabItem value="gradle" label="Gradle">

Add Jitpack repository on your project root `build.gradle` or `settings.gradle`

```gradle
repositories {
   maven { url 'https://jitpack.io' }
}
```

Add adserver dependency on your `app/build.gradle`

```gradle
dependencies {
   implementation 'com.github.Ad-Growth:ad-sdk-android:1.2.+'
}
```

  </TabItem>
 <TabItem value="maven" label="Maven">

```xml
<repositories>
   <repository>
      <id>jitpack.io</id>
      <url>https://jitpack.io</url>
   </repository>
</repositories>

<dependency>
  <groupId>com.github.Ad-Growth</groupId>
  <artifactId>ad-sdk-android</artifactId>
  <version>1.2.+</version>
</dependency>
```

  </TabItem>
</Tabs>

### Next steps

Now you can [configure](../configuration/android) the SDK to start using
