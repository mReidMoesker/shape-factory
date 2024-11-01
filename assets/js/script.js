class Shape {
  constructor(name, colour) {
    this._name = name;
    this._colour = colour;
  }

  get name() {
    return this._name;
  }

  get colour() {
    return this._colour;
  }

  getInfo() {
    return `${this.name}, ${this.colour}`;
  }
}

const shapes = [];
const maxShapes = 25; 
const colorCodes = {
  red: "#f00",
  blue: "#09f",
  green: "#9f0",
  yellow: "#ff0",
  purple: "#90f"
};

function createShape() {
  if (shapes.length >= maxShapes) {
    alert("Maximum of 25 shapes reached!");
    return;
  }

  const shapeType = document.getElementById("shape-select").value;
  const color = document.getElementById("color-select").value;
  const shapeColor = colorCodes[color];

  const shape = new Shape(shapeType, color);
  shapes.push(shape);

  const shapeDiv = document.createElement("div");
  shapeDiv.classList.add("shape", shapeType);
  shapeDiv.style.backgroundColor = shapeColor;
  shapeDiv.onclick = () => alert(shape.getInfo());

  document.getElementById("grid").appendChild(shapeDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("create-btn");
  createButton.addEventListener("click", createShape);
});
