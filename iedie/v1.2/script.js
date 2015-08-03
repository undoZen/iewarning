/* IE 去死 modal 提示脚本 v1.2
 * 無用實驗室 荣誉出品
 * http://www.wuyongzhiyong.com
 * @license MIT
 */
;(function (){
var bh = 0;
if (typeof window.innerWidth == 'number') {
    bh = window.innerHeight;
} else if (document.documentElement && document.documentElement.clientHeight) {
    bh = document.documentElement.clientHeight;
} else if (document.body && document.body.clientHeight) {
    bh = document.body.clientHeight;
}
var ht = Math.max(0, (bh - 500)/2);
var isXP = /Windows NT 5/.test(navigator.userAgent);
var css = '.iedie-wrapper div{border:0 none;margin:0;padding:0;}'+
    'html,body,#iedie-bg{height:100%!important;width:100%!important;overflow:hidden!important;}'+
    '#iedie-bg{height:150%!important;}'+
    '#iedie-bg{position:absolute;top:0;left:0;z-index:1000010;background-color:#666;-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";filter: alpha(opacity=90);}'+
    '#iedie-modal-wrapper{position:absolute;top:'+ht+'px;left:50%;z-index:1000020;}'+
    '#iedie-modal{position:absolute;top:0px;left:-320px;width:600px;padding:20px;z-index:1000030;background-color:#F4F4F4;font-size:14px;line-height:1.2;color:#555;}'+
    '.iedie-line,.iedie-clear{clear:both;height:0px;overflow:hidden;}'+
    '.iedie-title-wrapper .iedie-clear{clear:both;height:10px;overflow:hidden;}'+
    '.iedie-line{background:black;height:1px;}'+
    '.iedie-close{font-size:12px;color:#999;float:right;display:inline;background:#eee;text-decoration:none;padding:3px 5px;}'+
    '.iedie-title{float:left;padding-bottom:14px;font-size:18px;color:#333;}'+
    '.iedie-browser p {padding:0;margin:0;margin-bottom:10px;}'+
    'a{text-decoration:none;color:#666;font-weight:bold;}'+
    '.iedie-body p{margin: 1em 0;}'+
    '.iedie-body a:hover{text-decoration:underline;}'+
    '.iedie-browser-desc{text-decoration:none;font-weight:normal;}'+
    '.iedie-browser-desc{padding-top:2px;color:#999;}'+
    'a.iedie-close{font-weight:normal;}'+
    '.iedie-browser-img{width:70px;height:60px;float:left;background-image:url(//wuyongzhiyong.b0.upaiyun.com/iedie/v1.2/recommended-browsers.jpg);background-repeat:no-repeat;}'+
    '.iedie-browser-ie .iedie-browser-img{background-position:0 -70px}'+
    (isXP?'':'.iedie-browser-ie .iedie-browser-name {padding-top:7px}')+
    '.iedie-browser-firefox .iedie-browser-name {padding-top:10px}'+
    '.iedie-browser-firefox .iedie-browser-img{background-position:0 -130px}'+
    '';

var hint = '<p>您正在使用的浏览器版本过低，不被本站支持，继续使用此浏览器访问本站，您可能会遇到页面样式错乱及某些功能无法正常使用的情况。低版本的浏览器也很可能存在安全漏洞，因此为了您在网上浏览及使用网银时的信息安全，请您尽快更换最新的浏览器。</p><p>以下是我们为您推荐的几款兼顾访问速度、兼容性与安全性的常用浏览器：</p>';
if (typeof IEDIE_HINT === 'string') {
    hint = IEDIE_HINT;
    delete IEDIE_HINT;
}
document.write('<div id="iedie-wrapper" class="iedie-wrapper"><div id="iedie-bg"></div><div id="iedie-modal-wrapper"><div id="iedie-modal"><div class="iedie-title-wrapper"><a class="iedie-close" onclick="__iedie_close()" href="javascript:;">&times;&nbsp;关闭</a><div class="iedie-title">温馨提示：您正在使用的浏览器版本已过时</div><div class="iedie-clear"></div></div><div class="iedie-line"></div><div class="iedie-body">'+
    hint+
    '<div class="iedie-browser iedie-browser-360"><p><div class="iedie-browser-img"></div><div class="iedie-browser-name"><a href="http://browser.qq.com" target="_blank">QQ 浏览器</a> / <a href="http://chrome.360.cn" target="_blank">360 极速浏览器</a><span class="iedie-browser-name-desc"> - 由谷歌「极速内核」驱动的浏览器</span></div><div class="iedie-browser-desc">国内所谓「极速内核」浏览器背后使用的都是来自谷歌的 Chromium 引擎，<br/>但谷歌服务在国内访问困难，推荐使用更适合国内网络环境的这两个定制版本</div><div class="iedie-clear"></div></p></div>'+
    '<div class="iedie-browser iedie-browser-ie"><p><div class="iedie-browser-img"></div><div class="iedie-browser-name"'+(isXP?' style="text-decoration:line-through"':'')+'><a href="http://windows.microsoft.com/zh-cn/internet-explorer/download-ie-MCM" target="_blank">Internet Explorer 11</a><span class="iedie-browser-name-desc"> - 微软IE 浏览器的最新版本</div><div class="iedie-browser-desc">与所有网银完美兼容，同时支持最新网页标准，推荐 Windows 用户安装'+(isXP?'<br/>很遗憾，您正在使用的操作系统也已过时，请先升级系统或选择其他浏览器':'')+'</div><div class="iedie-clear"></div></p></div>'+
    '<div class="iedie-browser iedie-browser-firefox"><p><div class="iedie-browser-img"></div><div class="iedie-browser-name"><a href="http://www.firefox.com.cn/" target="_blank">Firefox 中文版</a><span class="iedie-browser-name-desc">- 致力于推动网络开放标准的著名开源浏览器</span></div><div class="iedie-browser-desc">支持支付宝和部分网银（如招行等），安装网银插件后可以支持绝大多数网银</div><div class="iedie-clear"></div></p></div>'+
    '<div><br/>您还可以选择：<br/><a href="http://www.google.com/chrome" target="_blank">谷歌(Chrome)</a>、<a href="http://www.opera.com/" target="_blank">欧朋(Opera)</a>、<a href="http://www.liebao.cn/" target="_blank">猎豹</a>、<a href="http://ie.sogou.com/" target="_blank">搜狗</a>、<a href="http://se.360.cn/" target="_blank">360</a>、<a href="http://www.maxthon.cn/" target="_blank">傲游</a><br/><br/>'+
    '</div><a class="iedie-close" onclick="__iedie_close()" href="javascript:;">我已了解，继续访问 &gt;&gt;</a><div class="iedie-clear"></div></div></div></div></div>'+
    '');

var styleElem = document.createElement('style');
styleElem.type = 'text/css' ;
styleElem.styleSheet.cssText = css;
var wrapper = document.getElementById('iedie-wrapper');
wrapper.insertBefore(styleElem, document.getElementById('iedie-bg'));
//wrapper.appendChild(styleElem); // 添加为第一个子节点是为了下面能 trigger relayout

(function r(f){/in/.test(document.readyState)?setTimeout(function(){r(f);},9):f()}(function(){
    // 解决刷新的时候自动恢复位置的问题，在 domready 后 scrollTo 页面顶部
    // domready 代码来自 http://www.dustindiaz.com/smallest-domready-ever
    setTimeout(function(){
        window.scrollTo(0,0);
    }, 1);
}));

__iedie_close = function() {
    setTimeout(function () {
        __iedie_close = void 0;
        delete __iedie_close;
    }, 1);
    wrapper.innerHTML = '';
    if (wrapper.parentNode) {
        var tmp = 0; // trigger relayout，不然 IE7 下滚动条不会恢复
        tmp = wrapper.parentNode.offsetTop  +  'px';
        wrapper.parentNode.removeChild(wrapper);
    }
};

}());
