type CallbackName = 'prev' | 'next' | 'run' | 'blank';

/**
 * Registers the given callbacks to the appropriate presenter key events.
 *
 * @param callbacks Record of callbacks to register.
 * @param element HTML element to which the events shall be registered to. Optional, defaults to the document's body.
 */
export declare function presenterKeys(callbacks: Partial<Record<CallbackName, () => void>>, element?: HTMLElement): void;
