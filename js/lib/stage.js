import $ from "jquery";

export default class Stage{

    constructor( parentSelector ){

        const that = this;

        this.parentSelector = parentSelector;
        this.$parent = $( parentSelector );
        this.$self   = $( "<div class='stage_container'></div>" );

        this.$parent.addClass( "stage_parent" );
        this.$parent.empty().append( this.$self );

        this.$self.on( "mouseup.stage_click touchup.stage_click", ( e ) => {

            const o = that.$self.offset();
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
    append( $el ){
        this.$self.append( $el );
    }
}