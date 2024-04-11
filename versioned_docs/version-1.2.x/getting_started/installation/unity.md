---
title: Unity
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### Install

How to add this library to your unity project

- Download the latest `AdServerPlugin.unitypackage` from [release page on GitHub](https://github.com/Ad-Growth/ad-sdk-unity/releases)
- Double click on `AdServerPlugin.unitypackage` file to import the plugin into your unity project.

  ![Captura de tela 2024-02-22 150043](https://github.com/Ad-Growth/ad-sdk-unity/assets/78423625/2f6eb8fe-b0d6-4737-8544-77cb38cfde49)

### IMPORTANT

This plugin on Android only works for **24+ API Level**, so you have to do some more settings​

- Open File > Build Settings
- Click on Android and click Switch Platform
- Click on Player Settings<br/>
  ![1](https://github.com/Ad-Growth/ad-sdk-unity/assets/78423625/9ffc6e3a-2772-4a2d-b823-b859540993a3)
- Roll to `Other Settings` and set `Minimum API Level to 24` or more recent.
  ![2](https://github.com/Ad-Growth/ad-sdk-unity/assets/78423625/10ec5ca4-d541-4a8c-b1af-e82926df04c0)

### Next steps

You're now ready to [configure](../configuration/unity) the SDK and begin using it in your project.
