title: Win7(x64)下Android Studio 1.0.2 +Cordova/Phonegap(4.2.0)开发环境搭建指南
date: 2015-02-12 12:28:45
categories: Cordova
tags: [AndroidStudio,Cordova,Phonegap]
---


## 安装前软件准备

1、下载Java SDK 1.7及以上。  
　　我安装Android Studio时自动提示下载安装1.7 :  **[jdk-7u75-windows-x64.exe](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)**，也许1.6也可以用。  
2、下载Android Studio（含SDK）V1.0.1。  
　　此bundle己经包含Android SDK V5.0.1(API 21) 和 集成开发环境Android Studio v1.0.1 ：**[android-studio-bundle-135.1641136.exe](https://developer.android.com/sdk/index.html)**。其它版本V1.0.2也可以（建议下载该版本。行文前己安装1.0.1版，后升级成1.0.2）。  
3、下载NodeJS 32位或64位版本。  
　　我下载的是 v0.12.0 : **[node-v0.12.0-64.msi](http://nodejs.org/dist/v0.12.0/x64/node-v0.12.0-x64.msi)**。  
4、	下载 Ant。  
　　我下载的是 ant1.9.4 : **[apache-ant-1.9.4-bin.zip](http://ant.apache.org/bindownload.cgi)**。  
5、	下载 Android SDK 4.4.2(API 19)。  
　　此项非必需，在使用过程中如有需要再下载。  

## 安装与配置

### 一、安装JDK，配置环境变量。  
　　具体安装步骤和配置过程请自行百度，并做相应修改  
　　a)  新建 系统环境变量名：JAVA_HOME，变量值：D:\Dev\Java\jdk1.7.0_75  
　　b)	新建 系统环境变量名：CLASSPATH，变量值： .;%JAVA_HOME%\lib  
　　c)	修改Path环境变量，在最后增加 :  %JAVA_HOME%\bin  
　　检验安装与配置是否成功，请打开CMD命令行工具，提示符下分别运行  

```  
  C:\Users\Administrator>java –version
  C:\Users\Administrator>javac
```

　　命令，如果成功会看到类似如下画面  
![java env](/images/cordova/JAVA_ENV.jpg)  

### 二、安装Android Studio，配置环境变量。  
　　a)  新建 系统环境变量名：ANDROID_HOME，变量值 ： D:\Dev\Android\sdk  
　　b)	修改 系统变量Path，在最后增加 ：%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\build-tools\21.1.2;  

### 三、安装ANT，设置环境变量  
　　将压缩包 apache-ant-1.9.4-bin.zip解压到相应目录即安装完成。  
　　a)	新建 系统环境变量名：ANT_HOME，变量值：D:\tools\apache-ant-1.9.4  
　　b)	修改 系统变量Path，在最后增加：%ANT_HOME%\bin  
　　验证是否成功，打开CMD命令行窗口，提示符下输入：  

```  
  C:\Users\Administrator>ant –version
```

　　如果看到如下提示即为成功，否则请检查ANT_HOME路径及Path是否正确。  
![ANT_HOME](/images/cordova/ANT_HOME.png)  

### 四、安装NodeJS，配置环境变量。  
　　安装nodejs是为了后面安装Cordova/Phonegap，双击node-v0.12.0-x64.msi即进行安装，一路NEXT不会有什么问题。需要注意的是MSI安装完成后会增加路径到 系统环境变量Path，如果安装后发现安装程序没有增加Path路径，请自行添加，如 D:\tools\nodejs。  
　　验证是否安装配置成功，请打开CMD命令行窗口，在提示符下输入  

```  
  node –v  

  npm –v  
```

　　如果看到如下信息，表示安装成功。否则，请检查Path环境变量路径是否已正确添加。  
![Node Install](/images/cordova/Node_Path.png)  
　　此步骤也可以不下载，直接在官网点击Install进行安装：  
![Node Web Install](/images/cordova/Node_Web_Install.png)  

### 五、安装Cordova OR Phonegap。  
　　打开CMD命令行窗口，在提示符下输入如下命令进行安装 

```
  C:\Users\Administrator>npm install –g cordova
```

　　参数g进行全局安装。具体请百度。如果没有意外，你会看到如下提示：  
![Cordova Install](/images/cordova/Cordova_Install.png)  
　　你的Cordova即被安装在这里：**C:\Users\Administrator\AppData\Roaming\npm\node_modules**。  
　　Cordova版本是4.2.0，你还可以在命令行下输入 **cordova –version** 来查看安装的版本。  
![Cordova Version](/images/cordova/Cordova_Version.png)  


　　很多教程都是写的安装Phonegap，你也可以安装。  
　　PhoneGap是Apache Cordova的一个分支。你可以这样想，Apache Cordova是一台发动机，运行在PhoneGap上，就像WebKit这个浏览器引擎运行在Chrome浏览器和Safari浏览器上一样。  
　　PhoneGap是Adobe在Cordova的基础上加入了自家的各种服务而成的。例如，“PhoneGap构建服务”，可以让程序员将他的源代码上传到“云编译器”，生成应用程序每一个所支持平台的安装包。  
　　打开CMD命令行窗口，在提示符下输入如下命令进行安装： 

```
    C:\Users\Administrator>npm install –g phonegap
```

　　Phonegap安装后似乎提示信息更多些，版本也是4.2.0。  
![Phonegap Install](/images/cordova/Phonegap_Install.jpg)  

![Phonegap Version](/images/cordova/Phonegap_Version.png)  

### 六、新建Cordova或Phonegap 项目。
#### a)	创建App
　　打开CMD命令行窗口，CD到你的项目文件夹或者workspace路径下，执行： 

```
    D:\Dev\AndroidStudioProjects>cordova create hello com.example.hello HelloWorld
```

　　这行命令的意思是：创建一个名为HelloWorld，包名为com.example.hello的cordova项目，位置在当前路径下的hello。  
![Create App](/images/cordova/CreateApp.png)  

　　项目文件下相应会生成如下的App结构 
![App Constructure](/images/cordova/CreateApp2.jpg)

#### b)  给新建的项目 添加Platforms。
　　CD命令改变目录到hello路径下，然后执行cordova platform add android  

```
D:\Dev\AndroidStudioProjects>cd hello
D:\Dev\AndroidStudioProjects\hello>cordova platform add android
```

![Add Platform](/images/cordova/AddPlatform.png)   
　　如果没有错误信息，说明platform添加成功！  
　　你可以继续使用该命令添加其它平台如iOS,WP8等。你还可以使用　　
　　**cordova platform remove android**命令移除已经添加的platform。  

　　如果在添加platform的时候，报类似下面找不到**ANDROID_HOME**错误的时候：  
![Add Platform Error](/images/cordova/AddPlatform_Error.png)  

　　就是没有配置Android SDK的环境变量！当然，如果你是按照上面的步骤依次过来的，应该没有这个问题，如果不幸你碰上了，请参考步骤二中关于安装Studio后配置环境变量部分。

　　如果在添加platform的时候，报类似下面  
　　**Error: Please install Android target "android-19".**的错误。
![Add Platform SDK Notfound](/images/cordova/AddPlatform_Error_SDK_notFound.png)  

　　这是在你的环境里面没有相应的Android SDK。比如这里的android-19，也即Android4.4.2。  
　　打开我们的SDK安装目录，确实没有要求的**"android-19"**。因为我们在安装Android Studio1.0.1时，自带安装的SDK是Android SDK V5.0.1(android-21)。而现版的cordova虽然显示版本号是4.20，但android平台的默认版本3.6.4，它需要**"android-19"**。  
![Android SDK List](/images/cordova/Android_SDK_List.png)  

　　解决这个问题的办法有几种：要么安装android-19 SDK；要么让cordova支持高版本的android-sdk。  
　　1、在线安装android-19 SDK。或者，如果有已经下载好的本地压缩包（地址请自行百度），解压到SDK安装路径下即可。象这样:  
![Android SDK List](/images/cordova/Android_SDK_List2.png)

　　2、添加platform时，在命令行后指定cordova-android的版本号，如最新的3.7.1，它支持android-21。指定版本号的命令行：

```
    D:\Dev\AndroidStudioProjects\hello>cordova platform add android@3.7.1
```

![Add Platform Version](/images/cordova/AddPlatformVersion.png)  

　　3、网上有文章说:修改配置文件，如project.properties，将里面的 “target=android-19”,修改成你已经安装的SDK。我没有试验成功。网上其它文章里说的或许是老版本的方法，现在的project.properties都是缓存，每次运行 cordova platform add android 命令时，都会重新生成 project.properties 等文件。现版本的缓存路径在这里：  
　　**C:\Users\Administrator\.cordova\lib\npm_cache\cordova-android\**  
![Android SDK Cache](/images/cordova/Android_SDK_Cache.png)

#### c)  编译项目
　　如果上面添加platform成功，命令提示符下继续输入   

```
    D:\Dev\AndroidStudioProjects\hello>cordova build
```

![Build App](/images/cordova/BuildApp.png)  

　　Build命令也是下面两个命令的简便方式  

```
  D:\Dev\AndroidStudioProjects\hello>cordova prepare  
  D:\Dev\AndroidStudioProjects\hello>cordova complie
```

　　d)  在模拟器或设备中测试App。  

```
    D:\Dev\AndroidStudioProjects\hello>cordova emulate android
```

![Build App](/images/cordova/Android_Emulate.png)  

### 七、在Android Studio中打开Cordova创建的项目。
　　1、	打开Android Studio，选择Open an existing Android Studio project  
![Android Studio](/images/cordova/Android_Studio1.png)  

　　2、在弹出的窗口选择上面创建的项目的android子目录，按OK。  
![Android Studio](/images/cordova/Android_Studio2.png)  

　　3、点开IDE最下方的Enent Log窗口  
![Android Studio](/images/cordova/Android_Studio3.png)  

　　在窗口里点击蓝色 Import Gradle project 配置一下Gradle home，按OK。等待Gradle构建android项目。  
![Android Studio](/images/cordova/Android_Studio4.png)  

　　不出意外，项目将会成功创建在Studio里。  
![Android Studio](/images/cordova/Android_Studio5.png)  

　　如果你的Android Studio一直是下面这个画面：  
![Building Android](/images/cordova/buildingAndroid.png)  
　　其实这时候android studio 还是在下载 gradle ,但是由于被墙的原因, gradle 下载不了，所以建立不了项目。请查找相关gradle文章解决之。  

　　4、添加cordova-x.x.x.jar到Studio类路径里。  
　　不是完成了么？怎么还有配置要做？是的，请注意看上面的项目画面，类路径下面有很多红色波浪线！有用Java IDE开发经验的朋友一定知道这是类路径里没有相应类文件的原因。这是因为cordova从某版开始只提供java类的源文件，而不提供相应的jar包，只能自进制作！一般自己制作出来的jar包是这样的格式：cordova-x.x.x.jar。这里的xxx其实就是cordova的版本号。怎么制作？后面附上制作步骤。这里先假定该包已经生成：cordova-3.7.1.jar。  
　　怎么把cordova-3.7.1.jar添加到项目类路径里？  
　　a)	将cordova-3.7.1.jar复制到项目的libs目录下  
![JAR File Copy](/images/cordova/JarFile_Copy.png)  

　　b)  打开 Android Studio 项目设置：File-Project Structure  
![JAR File Config](/images/cordova/JarFile_Config1.png)  

　　c)  在弹出的窗口中从左至右依次选择  
![JAR File Config](/images/cordova/JarFile_Config2.png)  

　　d)  找到刚才拷贝的cordova-3.7.1.jar文件，选中。  
![JAR File Config](/images/cordova/JarFile_Config3.png)  
　　稍等片刻。项目重新编译完成，准备就绪。  
　　

## 附：自己编译打包制作cordova-3.7.1.jar。

　　首先，你要确定下列条件已经满足：  
　　　　**Java JDK 1.5**或更高版本；  
　　　　**Apahce ANT 1.8.0**或更高版本；  
　　　　**Android SDK**。
　　　　
　　然后，按照下面的步骤执行：  
　　1、 下载并解压缩**[cordova-android-3.7.1.tgz](https://www.apache.org/dist/cordova/platforms/cordova-android-3.7.1.tgz)**。GitHub上的**[cordova-android-master.zip](https://github.com/apache/cordova-android/archive/master.zip)**也可以。  
　　也可以直接进入  
　　**C:\Users\Administrator\.cordova\lib\npm_cache\cordova-android\3.7.1\package\framework** 执行第3步。  
　　2、	打开CMD命令行窗口，进入到刚刚解压的相应路径下，比如D:\Dev\AndroidStudioProjects\cordova-android-3.7.1\framework  
　　你的实际路径可能不一样，但请进入framework 子目录 。  
　　3、	执行下面的命令（需要在系统环境变量Path里设置相应的Android SDK和ANT）  

```
    android update project -p . -t android-21
```

　　如果有必要，也可以加上 –subprojects 参数

```
    android update project -p . -t android-21 –subprojects
```

　　4、	运行  

```
    ant jar
```

　　如果有问题，请检查系统环境变量**Path**是否己设置**JDK**、**Android SDK** 和 **ANT**。不出意外，你将得到 **cordova-3.7.1.jar**  
 

　　至此，本篇环境搭建工作已经完成。  
　　任何一篇文章都不可能解决自己遇上的各种问题，本地的环境、软件的更新都可能会导致配置的差异，实际配置中可能或多或少的碰到这样那样的问题，碰上了只能见招拆招。  
　　本人之前没有任何的Android开发经验，只是最近想学习学习HTML5移动开发，就有了本篇文章的出现。在开发环境的配置过程中，碰上了各种坑，痛苦不己（MS JAVA的世界一直都是这样子）。于是，痛过苦过之后，记录下来，以备日后参考。原本这只是我的一份备忘，但如果能帮上更多的人，将是幸事一件 ---- 幸运的事？幸福的事？Whatever, enjoy it! 
