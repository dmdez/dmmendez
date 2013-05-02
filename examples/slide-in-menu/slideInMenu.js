(function($) {
    $.fn.slideInMenu = function(options) {
        var defaults = {
            menuElement: 'ul',
            clickableElement: '> a',
            backElement: '<li class="back"><a href="#">Back</a></li>',
            activeClass: 'active'
        };

        var settings = $.extend({}, defaults, options);  

        return this.each(function() {
            $('li:has(' + settings.menuElement + ')')
                .each(function() {
                    var $link = $(settings.clickableElement, this);
                    var $ul = $('> ' + settings.menuElement, this);
                    var $back = $(settings.backElement);

                    $back.on('click', function() {
                        $ul.parent().removeClass(settings.activeClass);
                    });

                    $ul.prepend($back);

                    $link.on('click', function() {
                        $(this).parent().addClass(settings.activeClass);
                    }).addClass('hasChildren');
                });
        });
    };
})(jQuery);