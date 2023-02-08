# demo

## 启动

```
    parcel src/index.html
```

## 实时监控

```
    parcel watch src/index.html
```

## 构建

```
    npm run build-xxx // 比如: npm run build-webTRC
```

# demo列表 

1. WebRTC分享屏幕与录屏示例 getDisplayMedia 
2. rrweb使用websocket实现类似直播功能
3. 验证rrweb使用websocket实现直播模式，注意需要开启ws服务器
    使用方法：
        先运行node server.js打开websocket服务，然后打开send和reception页面，点击send页面的开始录制即可
4. chii远程调试工具验证
5. debugger 前端实用工具集合
    anyproxy  代理工具
    chii  远程调试工具
    sourcemap  线上代码查看
    <!-- Playwright 自动化代码生成 -->
    x-state 页面逻辑生成，通过state与组件库绑定，可以实现快速搭建页面
    url encode
    json格式化
    base64
    时间戳



# 服务列表  
服务列表不能使用上述方式，需要进入项目直接运行

本项目内auth文件夹下是服务器证书，由于是测试环境，所以直接放代码仓里面了，我随便生成的，参考http://www.51testing.com/html/10/n-7792310.html?nomobile=1

1. ws和rrweb使用websocket实现类似直播功能
    由于https协议的链接的话只支持wss协议，所以这里如果想变成wss协议的话需要本地服务器配置nginx代理
2.  在使用chii进行调试的时候注意两点：
    1. 使用taobao源进行安装
    npm install chii -g
    2. 注意script参数
    <script src="//192.168.0.103:8080/target.js" embedded="false"></script>
    embedded 为false则在服务端单独打开调试页面，否则在客户端增加一个iframe标签
    3. 区分环境适应https或http
    如果需要调试的页面使用的是http协议，则
    chii start -p 8080
    如果需要调试的页面使用的是https协议，则
    chii start --https --ssl-cert ./cert.pem --ssl-key ./key.pem