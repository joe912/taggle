/*global Taggle*/
(function() {


    // The example code uses the real id so i'm selecting these elements
    // via jquery so we dont screw with the examples
 
    new Taggle($('#taggleDiv')[0], {
        tags: ['These', 'are', 'prefilled', 'tags'],
duplicateTagClass: 'bounce'
    });




}());
