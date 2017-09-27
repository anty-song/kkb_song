( function ( window, document ) {
	var song = {
		// 对事件添加方法进行封装，避免重复兼容IE
		addMyEvent: function ( object, eventType, func, booleanValue ) {
			if ( object.attachEvent ) {
				object.attachEvent( 'on' + eventType, func );
			} else {
				object.addEventListener( eventType, func, booleanValue );
			}
		},
		delegate: function ( dom, childNode, type, fn, booleanValue ) {
			song.addMyEvent( dom, type, function ( event ) {// 不同函数之间存在联系，应写成song.<funcName>
				// fn();// 这里不能直接调用fn，若直接调用，函数中this的指向是window，故需做以下操作

				// 在这里还会遇到一个问题 -> 如果在父节点下还有一些不是所需的子节点，这些节点也会获取到
				// 所以要做一下判断
				if ( childNode === event.target.nodeName.toLowerCase() ) {
					fn.call(event.target);// 改变this的指向 28行输出li标签DOM对象
				}
			}, booleanValue );
		}
	}
	window.song = song;// 将song导出，以便外部调用
} )( window, document );