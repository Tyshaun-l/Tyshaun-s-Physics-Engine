import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Engine, Render, World, Bodies } from "matter-js";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create PixiJS Application
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x1099bb,
      view: canvasRef.current,
    });

    // Create MatterJS Engine
    const engine = Engine.create();
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "#fafafa",
      },
    });

    // Create ground object
    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    World.add(engine.world, [ground]);

    // Run MatterJS Engine and Renderer
    Engine.run(engine);
    Render.run(render);

    // Cleanup function
    return () => {
      if (app && !app.destroyed) {
        app.destroy(true); // Destroy PixiJS Application if it exists
      }
      Render.stop(render); // Stop MatterJS rendering
      Engine.clear(engine); // Clear MatterJS Engine
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Canvas;
