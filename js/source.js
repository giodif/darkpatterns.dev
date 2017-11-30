import $ from "jquery";
import Stage from "./lib/stage.js";
import DarkPattern from "./lib/darkpattern.js";

$( function(){
    const stage = new Stage( ".container" );
    const patterns = [];

    for( let i = 0; i < 5; i++ ){

        let p = new DarkPattern();
        
        patterns.push( p );
        stage.append( p.getView() );
    }
} );