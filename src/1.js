var arr = [],
    push = arr.push,
    slice = arr.slice;

function itcast ( html ) {

	return new itcast.fn.init( html );

}

itcast.fn = itcast.prototype = {

	constructor: itcast,

	length: 0,

	init: function ( html ) {
		// [].push.apply( this, parseHTML( html ) );

    if ( html == null || html === '' ) {
      // 结束
      this.events = {};
      return; // this
    }


		if ( typeof html === 'function' ) {

      // 如果是一个函数, 那么就将 函数绑定到 onload 上, 然后返回
      // onload = html;

      // 首先判断是否已经有函数
      var oldFn = onload;
      if ( typeof oldFn === 'function' ) {
        onload = function () {
          oldFn();
          html();
        };
      } else {
        onload = html;
      }


      return;
		}



    if ( html && html.type === 'itcast' ) {
      // 是一个 itcast 对象
      // 将传入的 itcast 对象所有的元素都加到 this 中
      push.apply( this, html );
      this.selector = html.selector;

      this.events = html.events;

      return;
    }


    


