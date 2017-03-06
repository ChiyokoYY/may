(function ( window, undefined ) {
    // 事件处理
    itcast.fn.extend({
        on: function ( type, fn ) {

            if ( !this.events[ type ] ) {
                this.events[ type ] = [];

                var that = this;
                this.each(function () {
                    // this 就是 DOM 对象
                    var self = this;
                    var f = function ( e ) {
                        for ( var i = 0; i < that.events[ type ].length; i++ ) {
                            // that.events[ type ][ i ](  );
                            // 在数组中是方法调用模式, this 就是这个数组, 需要将其指向为 dom 对象
                            // 不仅如此, 还需要提供 e
                            that.events[ type ][ i ].call( self, e );
                        }

                    };

                    if ( this.addEventListener ) {
                        this.addEventListener( type, f );
                    } else {
                        this.attachEvent( 'on' + type, f );
                    }

                });


            }

            this.events[ type ].push( fn );

            return this;
        },
        off: function ( type, fn ) {
            // 删除某些事件
            // 遍历数组, 从数组中删除函数即可
            var arr = this.events[ type ];
            if ( arr ) {
                // 如何从数组中删除数据
                // 获得数组中 fn 的索引
                for ( var i = 0; i < arr.length; i++ ) {
                    if ( arr[ i ] == fn ) {
                        break;
                    }
                }
                if ( i != arr.length ) {
                    arr.splice( i, 1 );
                }
            }
            return this;
        }
    });


    window.itcast = window.I = itcast;



})( window )