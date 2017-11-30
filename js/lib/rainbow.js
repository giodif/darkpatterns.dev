var Rainbow = function(){
        /*
        red: 0
        orange: 0.9
        yellow: 0.18
        green: 0.36
        cyan: 0.5
        blue: 0.7
        purple: 0.8
        */
        var i, j,
            changes = [  1,  -1,   1,  -1,    1,   -1   ],
            channel = [ "g", "r", "b", "g",  "r",  "b"  ],
            len     = channel.length,
            color   = { "r" : 255, "g" : 0, "b" : 0 },

            cloneColor = function( c ){

                return { "r" : c.r, "g" : c.g, "b" : c.b };
            };

        this.spectrum = [];
        this.spectrum.push( cloneColor( color ) );

        for( i = 0; i < len; i++ ){
            for( j = 0; j < 255; j ++ ){

                color[ channel[ i ] ] += changes[ i ];
                this.spectrum.push( cloneColor( color ) );
            }
        }

        this.spectrum.push( cloneColor( color ) );
        this.specLen  = this.spectrum.length - 1;
    };

    Rainbow.prototype = {
        //start, stop and val are all decimals
        color : function( val, start, stop ){

            var start = ( start || 0 ) * this.specLen,
                stop  = ( stop  || 1 ) * this.specLen,
                index = Math.floor( val * ( stop - start ) + start );

            return this.spectrum[ index ];
        },
        gray : function( val ){

            var v = Math.floor( val * 255 );

            return { r: v, g: v, b: v };
        }
    };

export default Rainbow;