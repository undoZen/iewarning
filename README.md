iewarning
=========

这是由<u>無用實驗室</u>出品的一个在低版本浏览器上以 modal 形式友好提示用户更换浏览器的小脚本，展示效果如下：

###v1
![screenshot](https://raw.githubusercontent.com/WuYongZhiYong/iewarning/master/iedie/v1/screenshot.png)

###v1.1
![screenshot](https://raw.githubusercontent.com/WuYongZhiYong/iewarning/master/iedie/v1.1/screenshot.png)


##优点

* 使用方便，只需加几行 IE-only 的条件注释代码，对现代浏览器不会产生任何影响
* 大小：包括了一个 8k 的 js 和一个 16k 的图片
* 醒目，目前多数的网站做法只是在顶部很窄的位置提示一句话，达不到鼓励用户更换浏览器的目的。而本身是否完全放弃 IE6、7 也是网站自己的选择。此脚本明显地告知用户，之后遇到样式和功能不正常是因为你已经落伍了。

##使用方式

对 IE10 一下，只需要以 conditional comments 的方式在 `<body>` 后添加如下代码即可：

###v1.1
```javascript
<!--[if lt IE 10]>
<script> // 如果推荐语使用默认值，可以删除此 script 标签
// IEDIE_HINT = '<p>自定义的提示语</p>';
// 改为推荐 IE11，在 XP 系统下提示操作系统过时
</script>
<script src="http://wuyongzhiyong.b0.upaiyun.com/iedie/v1.1/script.min.js"></script>
<![endif]-->
```

###v1
```javascript
<!--[if lt IE 10]>
<script> // 如果以下两个配置都用默认值，可以删除此 script 标签
// IEDIE_HINT = '<p>自定义的提示语</p>';
// IEDIE_IE_LINK_IN_XP = true; // 是否在 XP 系统上显示升级 IE 链接，如果网站支持 IE8，可以设为 true
</script>
<script src="http://wuyongzhiyong.b0.upaiyun.com/iedie/v1.0.1/script.min.js"></script>
<![endif]-->
```

由于 IE 10 不支持条件注释了，如果要对 IE10 也显示，则需要在条件注释后面再添加：

```javascript
<script>
if (navigator.userAgent.match(/Trident\/6/)) {
    // IEDIE_HINT = '<p>自定义的提示语</p>';
    document.write('<script src="http://wuyongzhiyong.b0.upaiyun.com/iedie/v1.0.1/script.min.js"><'+'/script>');
}
</script>
```

##浏览器选择

###v1
在第一个版本中，主推三款符合国情的国产浏览器，首推 360 极速，基本上就是个定制化的 Chrome，是让国内用户用上最新版 Chrome 的最便捷方式；另外猎豹和搜狗两款浏览器，都是正确设置 meta 后会默认以 chrome 内核渲染的。而 360 安全浏览器默认是 IE 内核，需要第二次刷新才回变成 chrome

###v1.1
接受开发者社区反馈意见，调研后决定推荐 Chrome、IE11 和 Firefox 三款，因为国内网络环境的问题，仍然把 360 极速作为 Chrome 的首要备选推荐。

###不推荐某些热门浏览器的原因

* QQ 浏览器：默认不带 Chrome 内核，需要用户再手动下载，听说会捆绑 QQ 杀毒；
* 百度浏览器：听说比 360 还流氓，后台静默安装的卫士和杀毒无法卸载。

##关于触发双核浏览器使用 chrome 内核

建议在 `<head>` 标签内使用

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="renderer" content="webkit" />
```

##授权
作者 @undoZen, 無用實驗室 以 MIT 协议开源
