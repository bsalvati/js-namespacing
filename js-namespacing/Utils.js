BLOG.namespace('BLOG.utils');
BLOG.utils = function(){
    //borrowed the partial function from John Resig
    Function.prototype.partial = function() {
        var fn = this, args = Array.prototype.slice.call(arguments);
        return function() {
            var arg = 0;
            for (var i = 0; i < args.length && arg < arguments.length; i++)
                if (args[i] === undefined)
                    args[i] = arguments[arg++];
            return fn.apply(this, args);
        };
    };
    var tenSecondDelay = $.proxy(setTimeout.partial(undefined, 10000),this);

    return{
        delayTenSeconds:tenSecondDelay
    }
}();

