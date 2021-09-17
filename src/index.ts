// Function to add a link to <head> which then gets prefetched
export const addPrefetchLink = (event: Event): void => {
    if (event.target !== null) {
        const link = document.createElement('link');

        link.href = (<HTMLAnchorElement>event.target).href;
        link.rel = 'prefetch';

        document.head.appendChild(link);
    }
};

export const addEventListenerOnce = (
    link: HTMLAnchorElement,
    events: ReadonlyArray<keyof HTMLElementEventMap>,
    prefetch: (event: Event) => void,
) => {
    console.log('Registering listeners...');
    events.forEach((event) => link.addEventListener(event, handler));

    const handler = (event: Event) => {
        console.log('Removing listeners...');
        events.forEach((event) => link.removeEventListener(event, handler));
        prefetch(event);
    };
};
