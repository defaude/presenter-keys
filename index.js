const noop = () => undefined;

export function presenterKeys(callbacks, element = document.body) {
    const settings = {
        prev: noop, next: noop, run: noop, blank: noop,
        ...callbacks
    };

    const keyHandlers = {
        PageUp: settings.prev,
        PageDown: settings.next,
        F5: settings.run,
        Escape: settings.run,
        '.': settings.blank
    };

    element.addEventListener('keydown', event => {
        if (event.key in keyHandlers) {
            event.preventDefault();
            keyHandlers[event.key]();
        }
    });
}
