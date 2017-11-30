export default {
    range : ( min, max ) => {

        // console.log( min, max );
        
        return min + ( Math.random() * ( max - min ) );
    }
}