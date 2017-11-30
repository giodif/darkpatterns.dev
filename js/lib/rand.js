export default {
    range : ( min, max ) => {
        return min + ( Math.random() * ( max - min ) );
    },
    num : ( min, max ) => {
        return Math.floor( min ) + Math.round( Math.random() * ( max - min ) );
    }
}