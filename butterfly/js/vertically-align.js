/**
 *   Make the header element stick to the top when scrolled
 */
Butterfly.verticallyAlign = function(form) {
    if(!window.$) return;
    
    var delegator = function() {
        var me = $(this);
        var html = me.html();
        var text = me.text();
        
        if(html !== text) {
            Butterfly.validate.delegate('');
        }
    };
    
    //  Make 100% sure we're passing a jQuery object
    form = $(form);
    
    //  Bind input events
    form.find('input, textarea').bind('keyup paste', delegator);
};