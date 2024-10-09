function noop() {}

export function presenterKeys({prev = noop, next = noop, run = noop, blank = noop}, element = document.body) {
    const keyHandlers = {
        PageUp: prev,
        PageDown: next,
        F5: run,
        Escape: run,
        '.': blank
    };

    element.addEventListener('keydown', event => {
        if (event.key in keyHandlers) {
            event.preventDefault();
            keyHandlers[event.key]();
        }
    });
}
