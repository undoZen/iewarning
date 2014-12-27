iewarning
=========

这是由<u>無用實驗室</u>出品的一个在低版本浏览器上以 modal 形式友好提示用户更换浏览器的小脚本，展示效果如下：

![screenshot](https://raw.githubusercontent.com/WuYongZhiYong/iewarning/master/iedie/v1/screenshot.png)

##优点

* 使用方便，只需加几行 IE-only 的条件注释代码，对现代浏览器不会产生任何影响
* 大小：包括了一个 7k 的 js 和一个 13k 的图片
* 浏览器的选择：推荐符合国情的国产浏览器，首推 360 极速，基本上就是个定制化的 Chrome，是让国内用户用上最新版 Chrome 的最便捷方式；另外猎豹和搜狗两款浏览器，都是正确设置 meta 后会默认以 chrome 内核渲染的。而 360 安全浏览器默认是 IE 内核，需要第二次刷新才回变成 chrome，QQ 浏览器（版本 8）就更烂，需要用户再手动下载 chrome 内核插件，所以这些浏览器的推荐优先级靠后——说着我把 QQ 浏览器去掉了……
* 醒目，目前多数的网站做法只是在顶部很窄的位置提示一句话，达不到鼓励用户更换浏览器的目的。而本身是否完全放弃 IE6、7 也是网站自己的选择。此脚本明显地告知用户，之后遇到样式和功能不正常是因为你已经落伍了。

##使用方式

只需要以 conditional comments 的方式在 `<body>` 后添加如下代码即可：

```javascript
<!--[if lt IE 10]>
<script> // 如果以下两个配置都用默认值，可以删除此 script 标签
// IEDIE_HINT = '<p>自定义的提示语</p>';
// IEDIE_IE_LINK_IN_XP = true; // 是否在 XP 系统上显示升级 IE 链接，如果网站支持 IE8，可以设为 true
</script>
<script src="http://wuyongzhiyong.b0.upaiyun.com/iedie/v1/script.min.js"></script>
<![endif]-->
```

##关于触发双核浏览器使用 chrome 内核

建议在 `<head>` 标签内使用

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="renderer" content="webkit" />
```

##授权
MIT
