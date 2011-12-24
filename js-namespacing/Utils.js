BLOG.namespace('BLOG.utils');
BLOG.utils = function(){

    var tenSecondDelay = $.proxy(setTimeout.partial(undefined, 10000),this);

    return{
        delayTenSeconds:tenSecondDelay
    }
}();

