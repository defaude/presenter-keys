/*
 * jquery-r800-keys
 * 
 *
 * Copyright (c) 2014 Roland Hummel
 * Licensed under the WTFPL license.
 */

(function ($) {
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
                33: settings.prev, // page up
                34: settings.next, // page down
                116: settings.run, // f5
                27: settings.run, // escape
                190: settings.blank // . (period)
            };

        $this.on('keydown', function (event) {
            if (event.which in keys) {
                keys[event.which].call($this);
                event.preventDefault();
                event.stopPropagation();
            }
        });

        return $this;
    };
}(jQuery));
