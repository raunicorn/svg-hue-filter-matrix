export default function svgHueFilterMatrix (hue) {
  var hue = hue || 0
  var degree = 1.8 * hue * Math.PI / 180
  var cos = Math.cos(degree)
  var sin = Math.sin(degree)
  var lumR = 0.213
  var lumG = 0.715
  var lumB = 0.072
  var matrix = `${lumR + cos * (1 - lumR) - sin * lumR} ${lumG - cos * lumG - sin * lumG} ${lumB - cos * lumB + sin * (1 - lumB)} 0 0
  ${lumR - cos * lumR + sin * 0.143} ${lumG + cos * (1 - lumG) + sin * 0.140} ${lumB - cos * lumB - sin * 0.283} 0 0
  ${lumR - cos * lumR + sin * (lumR - 1)} ${lumG - cos * lumG + sin * lumG} ${lumB + cos * (1 - lumB) + sin * lumB} 0 0
  0 0 0 1 0`
  return matrix
}