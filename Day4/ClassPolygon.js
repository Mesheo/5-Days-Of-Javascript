class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
    perimeter() {
      let sum_of_sides = 0;
      for (let i = 0; i < this.sides.length; i++) {
        sum_of_sides += this.sides[i];
      }
      return sum_of_sides;
    }
}

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());