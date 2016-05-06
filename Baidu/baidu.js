
	var drawing = document.getElementById("canvas");
	if(drawing.getContext){
		var context = drawing.getContext("2d");

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

		fillEllipse(context,-55,-85,17,22,0,2*Math.PI,"rgb(35,25,220)");
		fillEllipse(context,-22,-125,16,22,0,2*Math.PI,"rgb(35,25,220)");
		fillEllipse(context,22,-122,17,22,0,2*Math.PI,"rgb(35,25,220)");
		fillEllipse(context,58,-75,18,22,0,2*Math.PI,"rgb(35,25,220)");

		fillText(context,0,-32,"du","70px HGB","#fff");
		fillText(context,-160,-35,"Bai","100px HGB","rgb(225,6,1)");

		var baidu = new Image();
		baidu.src = "baidu.png";

		if(baidu.complete){
		   context.drawImage(baidu,80,-80);
		}else{
		   baidu.onload = function(){
		     context.drawImage(baidu,80,-80);
		   };
		   baidu.onerror = function(){
		     window.alert('图片加载失败');
		   };
		}; 

	}else{
		alert("浏览器不支持Canvas!");
	}


// 写文字
function fillText (context,x,y,text,font,color) {
	context.font = font;
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillStyle = color;
	context.fillText(text,x,y);
}

// 画椭圆
function fillEllipse (context, x, y, a, b,startAngle,endAngle,fillColor) {
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
