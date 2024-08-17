import React, { useState } from "react";
import Canvas from "./components/Canvas";
import GUI from "./components/GUI";
import PhysicsEngine from "./physics/PhysicsEngine";
import { Engine } from "matter-js";

const App = () => {
  const engine = Engine.create();
  const physicsEngine = new PhysicsEngine(engine);

  const handleShapeAdd = (shape) => {
    const options = { x: 100, y: 100, radius: 30, props: {} };
    physicsEngine.addShape(shape, options);
  };

  const handlePhysicsApply = (physicsType) => {
    const lastShape = physicsEngine.shapes[physicsEngine.shapes.length - 1];
    if (lastShape) {
      physicsEngine.applyPhysics(lastShape, physicsType);
    }
  };

  const handleColorChange = (color) => {
    const lastShape = physicsEngine.shapes[physicsEngine.shapes.length - 1];
    if (lastShape) {
      lastShape.render.fillStyle = color.hex;
    }
  };

  return (
    <div className="app">
      <Canvas />
      <GUI
        onShapeAdd={handleShapeAdd}
        onPhysicsApply={handlePhysicsApply}
        onColorChange={handleColorChange}
      />
    </div>
  );
};

export default App;
