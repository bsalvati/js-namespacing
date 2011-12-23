$(document).ready(function(){

    var utils = BLOG.utils;

    $('button').click(function(){
        utils.delayTenSeconds(function(){
            console.log("I waited!")
        });
    });

});