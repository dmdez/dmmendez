(function($) {
    $.fn.setHeightToMax = function() {
        var $container = $(this);
        var containerHeight = $container.height();
        var containerOffset = $container.offset();
        var height = containerHeight;

        $container.find('*').each(function() {
            var elementHeight = $(this).height();
            var elementOffset = $(this).offset();
            var totalHeight = (elementOffset.top - containerOffset.top) + elementHeight;
            
            if ( totalHeight > height )
                height = totalHeight;
        });

        return $container.css({ 'min-height': height + 'px' });
    };
})(jQuery);