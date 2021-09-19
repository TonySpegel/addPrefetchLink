# addPrefetchLink
Adds links with `rel="prefetch"` to your `<head>`-element to speed up page navigation.
It is loosley inspired by [quicklink](https://getquick.link/) but works differently (their [approach](https://getquick.link/approach/)) by using user interactions.

## How it works
**addPrefetchLink** registers a set of events per link (these are by default `mouseover` and `focus`). These will add a prefetch-link to your `<head>`-element. To avoid unnecessary network requests only one of the events per link will be executed. 

## Usage
```bash
# Installation:
npm i add-prefetch-link --save-dev
```
```javascript
// Import library
import { addPrefetchLink } from 'add-prefetch-link';

// Select links
const links = document.querySelectorAll('a');

// Add event to prefetch links
links.forEach((link) => {
    addPrefetchLink(link);
});

// Alternative to define events
links.forEach((link) => {
    addPrefetchLink(link, ['mouseover', 'focus']);
});
```

## Limitations
This package is build with the latest module standard 
to date so it won't work as an AMD or CommonJS module