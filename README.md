# Logitech R800 Presenter keys made easy

A super-simple jQuery plugin that provides callbacks for all four action keys on the sweet [Logitech R800 Presenter](http://www.logitech.com/en-ch/support/professional-presenter-r800).

Basically, the presenter is a USB keyboard that will send the following key codes:
* Previous => PageUp (33)
* Next => PageDown (34)
* Run => Alternating between F5 (116) and Escape (27)
* Blank => A simple dot (190)

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/defaude/jquery-jquery-r800-keys/master/dist/jquery.jquery-r800-keys.min.js
[max]: https://raw.github.com/defaude/jquery-jquery-r800-keys/master/dist/jquery.jquery-r800-keys.js

Call the plugin on any jQuery-wrapped DOM node (`document` should do the trick for most use cases, though.) and pass an object containing the callbacks:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-r800-keys.min.js"></script>
<script>
jQuery(function($) {
	$(document).r800Keys({
		prev: function () { alert('prev'); },
		next: function () { alert('next'); },
		run: function () { alert('run'); },
		blank: function () { alert('blank'); }
	});
});
</script>
```

Note: You don't have to pass all four callbacks. If you're just interested in the `prev` and `next` keys, for example, you could pass an object only containing those two.

## Release History
2014-02-23 1.0.3 Switched to Grunt-based build :)
