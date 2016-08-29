si-env  
===  
移动设备环境探测工具  

### 使用方法：  

```javascript 
<script src="./lib/env.js"></script> 
```  
### 返回结果  
引入`env.js`后，会在SI.env中保存对当前运行的环境的详细的信息内容。主要信息由如下方面。  
* `env.browser`: 运行时的浏览器信息，webview信息
* `env.os`: 运行时的设备信息
* `env.screen`: 运行时屏幕信息，包括vw，vh，dpr，scale等
* `env.thirdapp`: 是否在qq或微信中打开的页面
* `env.params`: url中的查询参数  

运行示例截图：  
![](https://raw.githubusercontent.com/T-phantom/si-env/master/test/example.png)  

