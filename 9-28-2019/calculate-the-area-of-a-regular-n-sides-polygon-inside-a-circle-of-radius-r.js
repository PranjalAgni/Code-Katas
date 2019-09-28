function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  const angle = 360 / numberOfSides;
  const base = Math.sin(((angle / 2) * Math.PI) / 180) * circleRadius * 2;
  const height = Math.cos(((angle / 2) * Math.PI) / 180) * circleRadius;
  return +((base * height * numberOfSides) / 2).toFixed(3);
  /**
   * To find area of polygon inside circle ==>
   * Find the angle of traingle which is forming inside Circle.
   * Get the base and height of a traingle
   * Calculate area of that traingle T1
   * Multiply T1 * number_of_sides
   */
}

console.log(areaOfPolygonInsideCircle(3, 3), 11.691);

console.log(areaOfPolygonInsideCircle(2, 4), 8);

console.log(areaOfPolygonInsideCircle(2.5, 5), 14.86);
