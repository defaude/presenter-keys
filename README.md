jquery-r800-keys
================

A super-simple jQuery plugin that provides callbacks for all four action keys on the sweet [Logitech R800 Presenter](http://www.logitech.com/en-ch/support/professional-presenter-r800).

Basically, the presenter is a USB keyboard that will send the following key codes:
* Previous => PageUp (33)
* Next => PageDown (34)
* Run => Alternating between F5 (116) and Escape (27)
* Blank => A simple dot (190)

How to use
----------

Call the plugin on any jQuery-wrapped DOM node (`document` should do the trick for most use cases, though.) and pass an object containing the callbacks:

	$(document).r800Keys({
		prev: function () { alert('prev'); },
		next: function () { alert('next'); },
		run: function () { alert('run'); },
		blank: function () { alert('blank'); }
	});

Note: You don't have to pass all four callbacks. If you're just interested in the `prev` and `next` keys, for example, you could pass an object only containing those two.