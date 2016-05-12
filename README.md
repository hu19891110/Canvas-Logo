# Canvas-Logo
运用HTML5 canvas画布绘制Logo
## 目录
* [Tencent](#tencent)
  * [效果](#效果)
  * [框架](#框架)
  * [绘制](#绘制)
* [Baidu](#baidu)
  * [效果](#效果)
  * [绘制](#绘制)
  	* [熊掌](#熊掌)
	* [手指](#手指)
	* [字体](#字体)
  * [问题](#问题)

##Tencent
###效果
![](https://github.com/GeinFan/Canvas-Logo/raw/master/Tencent/效果.png)
###框架
按照[AlloyTeam原创CSS3绘制腾讯QQ企鹅Logo](http://www.alloyteam.com/2012/10/css3-draw-qq-logo/)的框架分解企鹅各部位
![](https://github.com/GeinFan/Canvas-Logo/raw/master/Tencent/框架.png)
###绘制
* 圆&半圆&椭圆
```js
function fillEllipse(context, x, y, a, b,startAngle,endAngle,fillColor) {
    context.save();
    var r = (a > b) ? a : b;
    var ratioX = a / r;
    var ratioY = b / r;
    context.scale(ratioX, ratioY);
    context.beginPath();
    context.arc(x / ratioX, y / ratioY, r, startAngle, endAngle, false);
    context.closePath();
    context.restore();
    context.fillStyle = fillColor;
    context.fill();
}
```
    * 均匀压缩法
    * 通过参数a，b控制圆或者椭圆
    * startAngle,endAngle控制角度，半圆或整圆
    * 对于带边框的圆或椭圆，只需重写一个函数，并加上strokeStyle与stroke()

* 弧线
```js
function strokeCurve(context,startX,startY,endX,endY,controlX,controlY,lineWidth){
    	context.beginPath();
		context.moveTo(startX,startY);
		context.quadraticCurveTo(controlX,controlY,endX,endY);	
		context.lineWidth = lineWidth;
		context.stroke();
		context.closePath();	
}
```
     quadraticCurveTo(cx,cy,x,y)借助控制点(cx,cy)绘制一条二次曲线
##Baidu
###效果
![](https://github.com/GeinFan/Canvas-Logo/raw/master/Baidu/效果.png)
###绘制
####熊掌
    由于掌心是不规则且对称的图形，所以我打算借助三次贝塞尔曲线，改变坐标原点后绘制一半图形，另一半对称修改坐标即可
```js
        context.translate(300,300);
    	context.beginPath();
		context.moveTo(-15,0);
		context.bezierCurveTo(-4,-4,4,-4,15,0);
		context.bezierCurveTo(50,15,70,-25,50,-43);
		context.bezierCurveTo(30,-55,30,-90,0,-90);
		context.bezierCurveTo(-25,-90,-30,-55,-50,-43);
		context.bezierCurveTo(-70,-25,-50,15,-15,0);
		context.fillStyle = "rgb(35,25,220)";
		context.fill();
		context.closePath();
```
####手指
    借用前面腾讯企鹅logo绘制圆的函数即可
####字体
英文字体：Handel Gothic BT，中文字体：百度综艺简体

从网上下载后引入HTML
```html
@font-face {
    		    font-family: HGB;
			    src: url('font/hgb-webfont.eot');
			    src: url('font/hgb-webfont.eot?#iefix') format('embedded-opentype'),
			         url('font/hgb-webfont.woff2') format('woff2'),
			         url('font/hgb-webfont.woff') format('woff'),
			         url('font/hgb-webfont.ttf') format('truetype'),
			         url('font/hgb-webfont.svg#HGB') format('svg');
			    font-weight: normal;
			    font-style: normal;
			}
```
通过js将文字绘制到画布中
```js
function fillText (context,x,y,text,font,color) {
    context.font = font;
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillStyle = color;
	context.fillText(text,x,y);
}
```
###问题
引入的字体存在浏览器兼容问题
    
    chrome浏览器下，div中引入的英文字体Handel Gothic BT能正常显示，中文字体百度综艺简体不能显示。而canvas画布英文字体Handel Gothic BT都不能显示，显示了浏览器默认字体。
    firefox浏览器下，div和canvas中的英文字体Handel Gothic BT能正常显示，而中文字体百度综艺体不能显示，显示了其默认字体。
####解决办法
    暂时未能解决百度综艺体的兼容问题，可能是我下载的字体文件有误，最后我只能在canvas中插入图片完成logo的绘制。
