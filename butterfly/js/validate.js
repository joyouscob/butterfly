/**
 *   Make the header element stick to the top when scrolled
 */
Butterfly.validate = function(form) {
    if(!window.$) return;
    
    form = $(form);
    
    form.find('input, textarea').bind('keyup paste', function(e) {
        console.log($(this));
    });
};