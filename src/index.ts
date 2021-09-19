/**
 * Add a link to <head> which then gets prefetched
 */
const addToHead = (event: Event): void => {
    if (event.target !== null) {
        const link = document.createElement('link');

        link.href = (<HTMLAnchorElement>event.target).href;
        link.rel = 'prefetch';

        document.head.appendChild(link);
    }
};

/**
 * Handles the process of adding and removing EventListeners.
 * Once an event has been executed every other registered event will be removed.
 * 
 * Example:
 * User defined list of events:
 * const event = ['mouseover', 'focus'];
 * 
 * User focuses a link which adds it to the <head>-element.
 * Because of this any other event is not needed anymore and the one event left
 * gets removed.
 * 
 * 
 * Usage can look like this:
 * const links = document.querySelectorAll('a');
 * 
 * links.forEach((link) => {
 *     addPrefetchLink(link);
 * });
 */
export const addPrefetchLink = (
    link: HTMLAnchorElement,
    userEvents: ReadonlyArray<keyof HTMLElementEventMap> = ['mouseover', 'focus'],
) => {
    const handler = (event: Event) => {
        // Remove listeners
        userEvents.forEach((event) => link.removeEventListener(event, handler));
        addToHead(event);
    };

    // Register listeners
    userEvents.forEach((event) => link.addEventListener(event, handler));
};
