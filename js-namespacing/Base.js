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

