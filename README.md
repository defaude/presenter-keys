# presenter-keys

Tiny no-dependency library that allows you to easily bind actions to the keys of presenters like e.g. the
[Logitech R800 Presenter](https://www.logitech.com/en-us/products/presenters/r800-professional-presenter.910-001350.html).

Those kinds of presenters are basically keyboards that will send the following key codes:

* Previous => PageUp (33)
* Next => PageDown (34)
* Run => Alternating between F5 (116) and Escape (27)
* Blank => A simple dot (190)

## Direct usage

Simply import the `presenterKeys` function module and call it with the callback functions you want to attach to the
different keys:

```html

<script type="module">
    import { presenterKeys } from "https://unpkg.com/@defaude/presenter-keys";

    presenterKeys({
        prev: () => console.log('prev'),
        next: () => console.log('next'),
        run: () => console.log('run'),
        blank: () => console.log('blank')
    });
</script>
```

Based on the available keys, the four available callbacks are `prev`, `next`, `run` and `blank`. You don't need to pass
all four callbacks - maybe you just need `prev` and `next` in most cases.

## Installation as npm package

This is published as npm package, so you can just

```shell
npm install @defaude/presenter-keys
```

and use it in your code

```js
import { presenterKeys } from '@defaude/presenter-keys';

presenterKeys({ /* ... */ });
```
