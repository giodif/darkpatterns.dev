import $ from "jquery";
import Stage from "./lib/stage.js";
import DarkPattern from "./lib/darkpattern.js";

$( function(){

    const stage = new Stage( ".container" );

    for( let i = 0; i < 5; i++ ){
        stage.add( new DarkPattern() );
    }

    stage.update();
} );