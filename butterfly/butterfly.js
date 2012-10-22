//  Intialise our Butterfly object
var Butterfly = window.Butterfly || {};

//  Load a script file
Butterfly.load = function(url, done) {
    if(Object.prototype.toString.call(url) === '[object Array]') {
        var callback = false;
        
        for(var i = 0; i < url.length; i++) {
            if(url.length - 1 == i) {
                callback = setTimeout(done, 150);
            }
            
            Butterfly.load(url[i], callback);
        }
        
        return;
    }
    
    url = Butterfly.libraries[url] || url;
    
    if(window.jQuery) {
        return jQuery.getScript(url, done);
    }
    
    //  Fall back to loading manually
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    
    //  Set the URL
    script.src = url;
    
    //  Bind callbacks
    if(typeof done === 'function') {
        script.onreadystatechange = done;
        script.onload = done;
    }
    
    //  And initiate the script
    head.appendChild(script);
};

//  Libraries
Butterfly.libraries = {
    //  prismjs.com, syntax highlighting
    prism: '//raw.github.com/LeaVerou/prism/gh-pages/prism.js',
    
    //  jQuery (CDN)
    jQuery: '//code.jquery.com/jquery-latest.min.js',
    
    //  Unslider
    unslider: '//unslider.com/latest.js',
    
    // _.js, super handy tools
    underscore: '//underscorejs.org/underscore-min.js',
    
    //  Add custom libraries
    set: function(key, url) {
        if(typeof key == 'object') {
            for(var i in key) {
                key.hasOwnProperty(i) && Butterfly.libraries.add(i, key[i]);
            }
            
            return;
        }
        
        return Butterfly.libraries[key] = url;
    }
};