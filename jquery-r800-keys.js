jQuery(function ($) {
    "use strict";

    $.fn.r800Keys = function (options) {
        var $this = this,

            settings = $.extend({
                prev: $.noop,
                next: $.noop,
                run: $.noop,
                blank: $.noop
            }, options),

            keys = {
                33: settings.prev,
                34: settings.next,
                116: settings.run,
                27: settings.run,
                190: settings.blank
            };

        this.on('keydown', function (event) {
            if (event.which in keys) {
                keys[event.which].call($this);
                event.preventDefault();
                event.stopPropagation();
            }
        });

        return this;
    };
});
