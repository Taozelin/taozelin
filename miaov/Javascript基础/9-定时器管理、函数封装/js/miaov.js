
function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			
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
function opacity(obj, num, target, endFn) {
	
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