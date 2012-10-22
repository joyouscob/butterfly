/**
 *   Make the header element stick to the top when scrolled
 */
Butterfly.stickyHeader = function(offset) {
    if(!window.$) return;
    
    var header = $('.header');
    var height = header.height() - parseInt(offset);
    var win = $(window);
        
    //  Bind the scroll event
    win.scroll(function() {
        header[(win.scrollTop() > height ? 'add' : 'remove') + 'Class']('fixed');
    });
};

Butterfly.stickyHeader(5);