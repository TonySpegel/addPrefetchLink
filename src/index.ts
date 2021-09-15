// Function to add a link to <head> which then gets prefetched
export const addPrefetchLink = (event: Event) => {
    if (event.target !== null) {
        const link = document.createElement('link');
        
        link.href = (<HTMLLinkElement> event.target).href;
        link.rel = 'prefetch';
    
        document.head.appendChild(link);
    }
};