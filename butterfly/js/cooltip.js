/**
 *   Make the header element stick to the top when scrolled
 */
Butterfly.cooltip = function(wat, obj) {
    if(!window.$) return;
    
    wat = $(wat || 'acronym, abbr, .help');
    obj = obj || {};
    
    var handler = function(e) {
        var hover = e.type == 'mouseenter';
        var me = $(this);
        
        var msg = hover ? me.attr('title') : '';
        
        if(me.next().is('.cooltip')) {
            me.next().html(msg);
        } else {
            me.after('<span class="cooltip">' + msg + '</span>');
        }
    };
    
    wat.hover(handler);
};