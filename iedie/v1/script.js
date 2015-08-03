/* IE 去死 modal 提示脚本 v1
 * 無用實驗室 荣誉出品
 * http://www.wuyongzhiyong.com
 * @license MIT
 */
;(function (){
var css = '.iedie-wrapper div{border:0 none;margin:0;padding:0;}'+
    'html,body,#iedie-bg{height:100%!important;width:100%!important;overflow:hidden!important;}'+
    '#iedie-bg{height:150%!important;}'+
    '#iedie-bg{position:absolute;top:0;left:0;z-index:1000010;background-color:#666;-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";filter: alpha(opacity=90);}'+
    '#iedie-modal-wrapper{position:absolute;top:60px;left:50%;z-index:1000020;}'+
    '#iedie-modal{position:absolute;top:0px;left:-320px;width:600px;padding:20px;z-index:1000030;background-color:#F4F4F4;font-size:14px;line-height:1.2;color:#555;}'+
    '.iedie-line,.iedie-clear{clear:both;height:0px;overflow:hidden;}'+
    '.iedie-title-wrapper .iedie-clear{clear:both;height:10px;overflow:hidden;}'+
    '.iedie-line{background:black;height:1px;}'+
    '.iedie-close{font-size:12px;color:#999;float:right;display:inline;background:#eee;text-decoration:none;padding:3px 5px;}'+
    '.iedie-title{float:left;padding-bottom:14px;font-size:18px;color:#333;}'+
    'a.iedie-browser .iedie-browser-name{padding-top:3px;}'+
    'a{text-decoration:none;color:#666;font-weight:bold;}'+
    '.iedie-body a:hover{text-decoration:underline;}'+
    'a .iedie-browser-desc{text-decoration:none;font-weight:normal;}'+
    'a.iedie-browser .iedie-browser-desc{padding-top:2px;color:#999;}'+
    'a.iedie-close{font-weight:normal;}'+
    '.iedie-browser-img{width:60px;height:45px;float:left;background-image:url(//wuyongzhiyong.b0.upaiyun.com/iedie/v1/recommended-browsers.png);background-repeat:no-repeat;cursor:pointer;}'+
    '.iedie-browser-liebao .iedie-browser-img{background-position:0 -50px}'+
    '.iedie-browser-sogou .iedie-browser-img{background-position:0 -100px}'+
    '';

var hint = '<p>您正在使用的浏览器版本过低，不被本站支持，继续使用此浏览器访问本站，您可能会遇到页面样式错乱及某些功能无法正常使用的情况。低版本的浏览器也很可能存在安全漏洞，因此为了您在网上浏览及进行资金操作时的信息安全，请您尽快更换最新的浏览器。</p><p>以下是我们为您推荐的几款兼顾访问速度、兼容性与安全性的国产浏览器：</p>';
if (typeof IEDIE_HINT === 'string') {
    hint = IEDIE_HINT;
    delete IEDIE_HINT;
}
var isXP = /Windows NT 5/.test(navigator.userAgent);
var showIELink = !isXP;
if (window.IEDIE_IE_LINK_IN_XP) {
    showIELink = true;
    delete IEDIE_IE_LINK_IN_XP;
}
document.write('<div id="iedie-wrapper" class="iedie-wrapper"><div id="iedie-bg"></div><div id="iedie-modal-wrapper"><div id="iedie-modal"><div class="iedie-title-wrapper"><a class="iedie-close" onclick="__iedie_close()" href="javascript:;">&times;&nbsp;关闭</a><div class="iedie-title">温馨提示：您正在使用的浏览器版本过低</div><div class="iedie-clear"></div></div><div class="iedie-line"></div><div class="iedie-body">'+
    hint+
    '<a class="iedie-browser iedie-browser-360" href="http://chrome.360.cn" target="_blank"><p><div class="iedie-browser-img"></div><div class="iedie-browser-name">360 极速浏览器</div><div class="iedie-browser-desc">默认极速模式，在使用需 IE 访问的网站如网银等时会自动调用 IE 内核</div><div class="iedie-clear"></div></p></a>'+
    '<a class="iedie-browser iedie-browser-liebao" href="http://www.liebao.cn/" target="_blank"><p><div class="iedie-browser-img"></div><div class="iedie-browser-name">猎豹安全浏览器</div><div class="iedie-browser-desc">金山出品的浏览器，注意下载时区分是否绑定金山毒霸的版本</div><div class="iedie-clear"></div></p></a>'+
    '<a class="iedie-browser iedie-browser-sogou" href="http://ie.sogou.com/" target="_blank"><p><div class="iedie-browser-img"></div><div class="iedie-browser-name">搜狗浏览器</div><div class="iedie-browser-desc">由搜狗出品的、国内较老牌、使用量较大的一款浏览器</div><div class="iedie-clear"></div></p></a>'+
    '<p>您还可以选择：<br/>其他国产浏览器：<a href="http://liulanqi.baidu.com/index.html" target="_blank">百度浏览器</a>、<a href="http://se.360.cn/" target="_blank">360安全浏览器</a>、<a href="http://www.maxthon.cn/" target="_blank">傲游浏览器</a><br/>国外优秀浏览器：<a href="http://www.baidu.com/s?wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8" target="_blank">Google Chrome</a>、<a href="http://www.firefox.com.cn/" target="_blank">Firefox</a>、<a href="http://www.opera.com/" target="_blank">Opera</a><br/>'+
    (showIELink?'或<a href="'+(isXP?'http://dl.pconline.com.cn/html_2/1/104/id=49581&pn=0.html':'http://windows.microsoft.com/zh-cn/internet-explorer/download-ie-MCM')+'" target="_blank">升级您的 IE 至最新版本</a><br/>':'')+
    '</p><a class="iedie-close" onclick="__iedie_close()" href="javascript:;">我已了解，继续访问 &gt;&gt;</a><div class="iedie-clear"></div></div></div></div></div>'+
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
