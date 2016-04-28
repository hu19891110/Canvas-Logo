
	var drawing = document.getElementById("canvas");
	if(drawing.getContext){
		var r,a,b,x,y,color;
		var context = drawing.getContext("2d");
		// 坐标系原点改变
		context.translate(300,200);
		// 左脚
		fillEllipseWithStroke(context,-55,200,50,30,0,2*Math.PI,"rgb(255,166,0)","#000",4);
 
		// 左脚缝隙
		strokeCurve(context,-106,200,-88,190,-100,190,2);

    	// 右脚
    	fillEllipseWithStroke(context,55,200,50,30,0,2*Math.PI,"rgb(255,166,0)","#000",4);
    	
    	// 右脚缝隙
    	strokeCurve(context,106,200,88,190,100,190,2);


		// 黑色肚皮
		fillEllipse(context,0,85,120,120,0,2*Math.PI,"#000");

		
		// 白色肚皮
    	fillEllipse(context,0,100,100,100,0,2*Math.PI,"#fff");

		// 黑边红色小围巾
		context.beginPath();
		context.moveTo(-70,82);	
		context.quadraticCurveTo(-80,130,-60,140);
		context.quadraticCurveTo(-50,141,-40,140);
		context.quadraticCurveTo(-25,140,-30,82);
		context.lineWidth = 4;
		context.stroke();
		context.fillStyle = "rgb(255,0,0)";
		context.fill();
		context.closePath();
		// 黑边红色小围巾上的阴影
		fillCurve(context,-45,80,-40,130,-30,80,-50,100,-50,100,"#000");

		// 黑边红色围脖
		fillEllipseWithStroke(context,0,28,110,70,0,2*Math.PI,"rgb(255,0,0)","#000",5);
    	// 黑边红色围脖上的左阴影
    	fillCurve(context,-108,10,-77,55,-100,0,-107,40,-110,30,"#000");
    	// 黑边红色围脖上的右阴影
    	fillCurve(context,108,10,65,65,100,0,107,40,110,30,"#000");


		// 头上半部分
		fillEllipse(context,0,0,100,100,Math.PI,0,"#000");
		// 头下半部分
		fillEllipse(context,0,0,100,60,0,Math.PI,"#000");
		// 左眼白
		fillEllipse(context,-24,-20,18,28,0,2*Math.PI,"#fff");

		// 右眼白
		fillEllipse(context,24,-20,18,28,0,2*Math.PI,"#fff");
	


		// 左眼黑色瞳孔
		fillEllipse(context,-20,-20,10,13,0,2*Math.PI,"#000");

    	//左眼眼白
    	fillEllipse(context,-18,-22,3,4,0,2*Math.PI,"#fff");

    	// 右眼黑色瞳孔
    	fillEllipse(context,20,-20,10,13,0,2*Math.PI,"#000");

		

    	// 右眼眼白
    	fillEllipse(context,20,-14,7,10,0,2*Math.PI,"#fff");
 

    	// 嘴巴上半部分
    	fillEllipse(context,0,30,50,20,Math.PI,0,"rgb(255,166,0)")
    

    	// 嘴巴下半部分
    	fillEllipse(context,0,30,35,13,0,Math.PI,"rgb(255,166,0)")
    	
    	// 左边嘴角
    	fillCurve(context,-50,30,-22,40,-30,30,-45,40,-45,40,"rgb(255,166,0)");

		// 右边嘴角
		fillCurve(context,50,30,22,40,30,30,45,40,45,40,"rgb(255,166,0)");

		// 坐标系原地变回画布左上角
		context.translate(-300,-200);
		// 左手
		fillCurve(context,190,245,160,350,185,325,140,288,170,350,"#000");		
		// 右手
		fillCurve(context,410,245,440,350,415,325,460,288,430,350,"#000");

		
	}else{
		alert("浏览器不支持canvas！");
	}


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
function fillEllipseWithStroke(context,x,y,a,b,startAngle,endAngle,fillcolor,strokeColor,lineWidth){
	context.save();
    var r = (a > b) ? a : b;
    var ratioX = a / r;
    var ratioY = b / r;
    context.scale(ratioX, ratioY);
    context.beginPath();
    context.arc(x / ratioX, y / ratioY, r, startAngle, endAngle, false);
    context.closePath();
    context.restore();
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeColor;
    context.stroke();
    context.fillStyle = fillcolor;
    context.fill();
}
function strokeCurve(context,startX,startY,endX,endY,controlX,controlY,lineWidth){
		context.beginPath();
		context.moveTo(startX,startY);
		context.quadraticCurveTo(controlX,controlY,endX,endY);	
		context.lineWidth = lineWidth;
		context.stroke();
		context.closePath();	
}
function fillCurve(context,x0,y0,x1,y1,x2,y2,controlX1,controlY1,controlX2,controlY2,fillColor) {
		context.beginPath();
		context.moveTo(x0,y0);	
		context.quadraticCurveTo(controlX1,controlY1,x1,y1);
		context.quadraticCurveTo(controlX2,controlY2,x2,y2);
		context.fillStyle = fillColor;
		context.fill();
		context.closePath();
}