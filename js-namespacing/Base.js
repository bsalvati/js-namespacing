var BLOG = BLOG || {};

BLOG.namespace = function(nameSpaceMe){
    var pieces =  nameSpaceMe.split('.'),
        parent = BLOG,
        i;
    pieces[0] == "BLOG"?pieces = pieces.slice(1):pieces;
    for (var piece in pieces) {
       if(typeof parent[piece] === "undefined"){
            parent[piece] = {};
       }
        parent = parent[piece];
    }
    return parent;

};
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

