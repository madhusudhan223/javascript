const circle = {
  radius: 10,
  area: 314,
  set _radius(rad) {
    this.radius = rad;
  },
  get _radius() {
    return this.radius;
  },
  get _area() {
    return this.area;
  },
};
circle._radius = 30;
console.log(circle.radius);
