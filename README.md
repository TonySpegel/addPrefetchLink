# addPrefetchLink
Adds links with `rel="prefetch"` on user interaction
to speed up page navigation. Loosley inspired by [quicklink](https://getquick.link/).

## How it works
**addPrefetchLink** registers a set of EventListeners per link (by default: `mouseover` and `focus`) which will then add a prefetch-link to your `<head>`-element. To avoid unnecessary network requests only one of the events per link will be execute that process. 

Links won't be added on slow connections or under data saver settings.

[Codepen Demo](https://codepen.io/TonySpegel/full/PojrqZb)

## Usage
```bash
# Installation:
npm i add-prefetch-link
```
```javascript
// Import library
import { addPrefetchLink } from 'add-prefetch-link';

// Select links
const links = document.querySelectorAll('a:not([href^="mailto:"]):not([href^="tel:"])');

// Call addPrefetchLink on every link
links.forEach((link) => addPrefetchLink(link));

// Use your own set of events
links.forEach((link) => addPrefetchLink(link, ['focus']));
```

## Limitations
This package is build with the latest module standard 
to date so it won't work as an AMD or CommonJS module