//  Intialise our Butterfly object
var Butterfly = window.Butterfly || {};

//  Load a script file
Butterfly.load = function(url, done) {
    if(Object.prototype.toString.call(url) === '[object Array]') {
        var callback = false;
        
        for(var i = 0; i < url.length; i++) {
            if(i + 1 == url.length) {
                callback = done;
            }
            
            Butterfly.load(url[i], callback);
        }
        
        return;
    }
    
    //  Add .js if it's needed
    if(url.indexOf('.js') < 0) {
    	url += '.js';
    }

    var fullUrl = '../butterfly/js/' + url;
    
    return jQuery.getScript(fullUrl, function() {
    	var replaced = url.replace(/(\-[a-zA-Z])/g, function(match) {
    		return match.toUpperCase().substr(1);
    	});
    	
    	replaced = replaced.substr(0, replaced.length - 3);
    	
    	console.log(replaced);
    	
    	if(Butterfly[replaced]) {
    		Butterfly[replaced];
    	}
    
    	return done.call(this);
    });
};

//  Array.contains()
Array.prototype.contains = function(wat) {
    for(var i = 0; i < this.length; i++) {
        if(this[i].indexOf(wat) !== -1) return true;
    }
    
    return false;
};