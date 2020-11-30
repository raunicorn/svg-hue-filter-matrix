# svg-hue-filter-matrix

A function that generates hue filter matrix for svg element feColorMatrix which simulates filter effect of photoshop.

## install

```javascript
import svgHueFilterMatrix from "svg-hue-filter-matrix";
```

## how to use

```javascript
var hue = 0; // range from -100 to 100, 0 means no hue shift
console.log(svgHueFilterMatrix(hue));
// `1 0 0 0 0
// 0 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 0`
```
