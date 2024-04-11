---
title: Godot
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### Install

How to add this library to your Godot project

##### AdServer supports version _3.5_ and version _4.2_ of Godot. We will call them `v3` and `v4` respectively. So make sure to follow the instructions according to your version.


- Configure, install and enable the "Android Custom Template" for your project, just follow the official documentation;
  - [v3 Docs](https://docs.godotengine.org/en/3.5/tutorials/export/android_custom_build.html)
  - [v4 Docs](https://docs.godotengine.org/en/4.2/tutorials/export/android_gradle_build.html#doc-android-gradle-build)
- Access the [AdServer Godot Plugin releases page on GitHub](https://github.com/Ad-Growth/ad-sdk-godot/releases) to download the plugin
- If you use version v3 of Godot, download `AdServerPlugin-v3.zip`
- If you use version v4 of Godot, download `AdServerPlugin-v4.zip`
- Once downloaded, import the content within the root of your project
- Inside the zip there are 2 folders, `AdServer` and `android`
   - `AdServer`: contains binaries for use with C# and wrapper classes for use in gdscript
   - `android`: contains the plugin files for android
- The folder structure will look like this:<br/>
![install-0-folder_structure](https://github.com/Ad-Growth/ad-sdk-docs/assets/78423625/cf91294a-a1c2-4c94-a3f5-99e97864f51a)

### Enable plugin

After importing, the plugin should be recognized by the Godot Editor, so let's activate the plugin.
- In the menu go to `Project > Export`<br/>
![install-1-go_to_export](https://github.com/Ad-Growth/ad-sdk-docs/assets/78423625/8ef232d2-d1b2-4569-b887-c39d42134bab)
- Add Android preset and select it
- In the `Custom Build` section
  - __[v3]__ Activate the `Use Custom Build` option
  - __[v4]__ Activate the `Use Gradle Build` option
  - Set the minimum SDK version to 24 as it is the minimum version supported by AdServer
- In the `Plugins` section, activate the `Ad Server Plugin plugin` <br/>![install-2-android_custom_build_min_sdk_ad_plugin](https://github.com/Ad-Growth/ad-sdk-docs/assets/78423625/b605fd4c-9706-4c70-bac5-0cfbd6adc9fd)

### Important
Our plugin was written in C#, so your project needs to have a C# Solution

_You can skip this step if your project already has a C# Solution_

There are 2 ways to create the solution:
- If you are going to use C# in your project, just create a C# script and the solution will be created automatically<br/>![install-3-create_csharp_script_for_solution](https://github.com/Ad-Growth/ad-sdk-docs/assets/78423625/287432ab-f87f-4847-a351-150d43884988)
- If you are going to use GDScript, just go to `Project > Tools > C# > Create C# solution`![install-3-create_csharp_solution](https://github.com/Ad-Growth/ad-sdk-docs/assets/78423625/c31f2366-6ca9-4796-93db-36a3f2de5434)


### Configure your C# Project

You need to include the plugin binaries in your C# project
For this, after creating the C# solution, the project will receive the same name as your Game.

*Note: You will not be able to view the C# solution in your Godot editor, to do this you must open your project in a file explorer on your operating system. To do this, simply right-click on a file in your project, for example, your game icon and in the context menu select the "Show in File Manager" option.*<br/>
![image](https://github.com/Ad-Growth/ad-sdk-docs/assets/78423625/87ddb988-582e-4095-b8ca-8a6496ae439f)

In this case with Windows Explorer:<br/>
![image](https://github.com/Ad-Growth/ad-sdk-docs/assets/78423625/3161997d-f30f-4d34-83b9-ce67c3438df4)

Open the file `YOUR GAME NAME.csproj` with an editor and include the following information within the `<project>` tag:
```xml
<Project>

  <!-- ... other tags -->

  <!-- ⬇ Add me ⬇ -->
  <ItemGroup>
    <Reference Include="AdGrowth">
      <HintPath>.\AdServer\AdServer.dll</HintPath>
    </Reference>
    <Reference Include="AdGrowth">
      <HintPath>.\AdServer\AdGrowth.Interfaces.dll</HintPath>
    </Reference>
    <Reference Include="AdGrowth">
      <HintPath>.\AdServer\AdGrowth.Godot.dll</HintPath>
    </Reference>
  </ItemGroup>
  <!-- ⬆ Add me ⬆ -->

</Project>
```

### Next steps

You're now ready to [configure](../configuration/godot) the Plugin and begin using it in your project.
