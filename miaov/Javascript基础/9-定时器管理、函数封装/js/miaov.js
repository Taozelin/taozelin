
function doMove ( obj, attr, dir, target, endFn ) {  //要运动的元素 要运动的属性 每次运动的方向 目标点 运行完后触发的函数
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;   //如果目标点大于当前位置 方向为正 反之亦然
	
	clearInterval( obj.timer );    //防止点击多次 导致速度越来越快
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 获取当前位置 不断移动
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;                            //如果超过目标点，就提前拉回来
		}
		
		obj.style[attr] = speed + 'px';    //不断变化的属性，形成动画
		 
		if ( speed == target ) {
			clearInterval( obj.timer );     //到达目标点停止定时器
			
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, 30);
}
/*
function opacity(obj, num, target, endFn) {    //原理和上面的差不多
	
		num = getStyle(obj, 'opacity')*100 < target ? num : -num;
		
		clearInterval( obj.opacity );
		
		obj.opacity = setInterval(function () {
			
			var speed = parseInt( getStyle(obj, 'opacity')*100 ) + num;
			
			if ( speed > target && num > 0 || speed < target && num < 0 ) {
				speed = target;
			}
			
			obj.style.opacity = speed/100;
			obj.style.filter = 'alpha(opacity='+ speed +')';
			
			if ( speed == target ) {
				clearInterval( obj.opacity );
				endFn && endFn();
			}

		}, 20);
}
*/

//下面是自己写的，上面是大佬的
function opacity(obj,num,endopacity,endFn) {
			num = getStyle(obj,"opacity")*100>endopacity? -num : num;
			clearInterval(obj.opacity);
			obj.opacity = setInterval(function(){
			    speed = getStyle(obj,"opacity")*100 + num	
			    if (speed>endopacity&&num>0 || speed<endopacity&&num<0) {
			    	speed = endopacity;
			    }
				obj.style.opacity = speed/100;   //不要用parseInt(getStyle(obj,opacity))  返回的值是0
				if ( speed == endopacity ) {
					clearInterval(obj.opacity);
					endFn&&endFn();
				}
			},20)
		}

function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }
