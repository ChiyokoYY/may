
// select 引擎专门用于搜素元素
var select = 

(function () {


var push = [].push;

// 如果出现了错误那么就需要重写 push
try {
  var div = document.createElement( 'div' );
  div.innerHTML = '<p></p>';
  var arr = [];
  push.apply( arr, div.getElementsByTagName( 'p' ));
} catch ( e ) {

  push = {
    apply: function ( array1, array2 ) {
      for ( var i = 0; i < array2.length; i++ ) {
        array1[ array1.length++ ] = array2[ i ]; 
      }
    }
  };
}



// 正则表达式
var rnative = /\{\s*\[native/;
var rtrim = /^\s+|\s+$/g;
//                          1           2         3     4
var rbaseselector = /^(?:\#([\w\-]+)|\.([\w\-]+)|(\*)|(\w+))$/;






// 基本函数, support 对象, 验证 qsa 与 byclass
var support = {};

support.qsa = rnative.test( document.querySelectorAll + '' );
support.getElementsByClassName = 
	rnative.test( document.getElementsByClassName + '' );
support.trim = rnative.test( String.prototype.trim + '' );
support.indexOf = rnative.test( Array.prototype.indexOf + '' );




