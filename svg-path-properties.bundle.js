
// Simple mock of SVGPathProperties that returns fake multiple points
function SVGPathProperties(d) {
  this.getTotalLength = () => 100;
  this.getPointAtLength = len => {
    const t = len / 100;
    return { x: 100 * t, y: 50 + 30 * Math.sin(t * Math.PI * 2) };
  };
}
window.SVGPathProperties = SVGPathProperties;
