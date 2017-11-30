import $ from "jquery";
import rand from "./rand.js";
import Rainbow from "./rainbow.js";

const rainbow = new Rainbow();

export default class DarkPattern{

    constructor(){

        const that = this;

        this.$self   = $( "<div class='pattern_generic'></div>" );
        this.health  = rand.num( 3, 7 );
        this.__max   = this.health;

        console.log( this.health );

        this.__width = 0.25 + rand.range( -0.2, 0.3 );
        this.__aspectRatio = 0.7;

        this.x = rand.range( 0, 1 - this.__width );
        this.y = rand.range( 0, 1 - ( this.__width * this.__aspectRatio ) );

        this.$self.on( "mouseup.stage_click touchup.stage_click", ( e )=>{

            const o = that.$self.offset();
            // console.log( { x : e.pageX - o.left, y : e.pageY - o.top } );

            that.damage( 1 );
        } );

        this.update();
    }
    width(){
        return this.__width * 100;
    }
    height(){
        return this.width() * this.__aspectRatio;
    }
    left(){
        return this.x * 100;
    }
    top(){
        return this.y * 100;
    }
    damage( count ){

        this.health -= count;

        this.update();
        
        if( this.health <= 0 ){
            this.destroy();
        }
    }
    destroy(){
        this.$self.remove();
    }
    getView(){
        return this.$self;
    }
    update(){
        let that = this;
        let c    = rainbow.color( ( that.health / that.__max ), 0, 0.36 );

        this.$self.css( {
            "width"        : that.width() + "%",
            "padding-top"  : that.height() + "%",
            "left"         : that.left() + "%",
            "top"          : that.top() + "%",

            "border-color" : "rgb(" + c.r + "," + c.g + "," + c.b + ")",
            "border-style" : "solid",
            "border-size"  : "5px",
        } );
    }
}