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


# 服务列表  
服务列表不能使用上述方式，需要进入项目直接运行

本项目内auth文件夹下是服务器证书，由于是测试环境，所以直接放代码仓里面了，我随便生成的，参考http://www.51testing.com/html/10/n-7792310.html?nomobile=1

1. ws和rrweb使用websocket实现类似直播功能