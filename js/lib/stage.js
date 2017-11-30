import $ from "jquery";

export default class Stage{

    constructor( parentSelector ){

        const that = this;

        this.parentSelector = parentSelector;
        this.$parent = $( parentSelector );
        this.$self   = $( "<div class='stage_container'></div>" );

        this.patterns = [];

        this.$parent.addClass( "stage_parent" );
        this.$parent.empty().append( this.$self );

        this.$self.on( "mouseup.stage_click touchup.stage_click", ( e ) => {

            const o = that.$self.offset();
            that.update();
            // console.log( { x : e.pageX - o.left, y : e.pageY - o.top } );
        } );
    }
    width(){
        return this.$parent.outerWidth();
    }
    height(){
        return this.$parent.outerHeight();
    }
    getView(){
        return this.$self;
    }
    add( pattern ){
        this.patterns.push( pattern );
        this.$self.append( pattern.$self );
    }
    append( $el ){
        this.$self.append( $el );
    }
    update(){

        for( let i = this.patterns.length - 1; i >= 0; i-- ){

            if( this.patterns[ i ].health <= 0 ){
                this.patterns.splice( i, 1 );
                console.log( this.patterns );
            }
        }
    }
}