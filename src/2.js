if ( itcast.isString( html ) ) {
			if ( /^</.test( html ) ) {
				push.apply( this, parseHTML( html ) );
        // push.apply( this, itcast.fn.parseHTML( html ) );
			} else {
				// 选择器
				// select( html );
				push.apply( this, itcast.select( html ) );
        this.selector = html;
			}

		}



    // 判断是不是一个 DOM 对象 
    if ( html.nodeType ) {
      // 是 DOM 对象
      this[ 0 ] = html;
      this.length = 1;
    }


    this.events = {};

	},

  selector: '',   // 表示使用了选择器

  type: 'itcast',

  toArray: function () {
    // var res = [];
    // for ( var i = 0; i < this.length; i++ ) {
    //   res.push( this[ i ] );
    // }
    // return res;

    return slice.call( this, 0 );    
  },
  get: function ( index ) {
    if ( index === undefined ) {
      return this.toArray();
    }
    return this[ index ];
  },
  eq: function ( num ) {
    var dom;
    if ( num >= 0 ) {
      dom = this.get( num );
    } else {
      dom = this.get( this.length + num );
    }
    return this.constructor( dom );
  },

  each: function ( func ) {
    // 将 this 中的每一个 DOM 元素遍历一下
    return itcast.each( this, func );
  },
  map: function ( func ) {
    return itcast.map( this, func );
  } 
};

itcast.fn.init.prototype = itcast.fn;


// 添加可扩展的方法 extend
itcast.extend = itcast.fn.extend = function ( obj ) {
  for ( var k in obj ) {
    this[ k ] = obj[ k ];
  }
};


