# Canvas-Logo
运用HTML5 canvas画布绘制Logo
## 目录
* [Tencent](#tencent)
  * [效果](#效果)
  * [框架](#框架)
  * [绘制](#绘制)

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
