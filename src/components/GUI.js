import React, { useState } from "react";
import { CirclePicker } from "react-color";

const GUI = ({ onShapeAdd, onPhysicsApply, onColorChange }) => {
  const [selectedShape, setSelectedShape] = useState("circle");
  const [selectedPhysics, setSelectedPhysics] = useState("bounce");

  const handleShapeChange = (e) => {
    setSelectedShape(e.target.value);
  };

  const handlePhysicsChange = (e) => {
    setSelectedPhysics(e.target.value);
  };

  const handleAddShape = () => {
    onShapeAdd(selectedShape);
  };

  const handleApplyPhysics = () => {
    onPhysicsApply(selectedPhysics);
  };

  return (
    <div className="gui">
      <h2>Physics Engine GUI</h2>
      <div>
        <label>Select Shape:</label>
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="circle">Circle</option>
          <option value="rectangle">Rectangle</option>
          <option value="polygon">Polygon</option>
          {/* Add more options as needed */}
        </select>
        <button onClick={handleAddShape}>Add Shape</button>
      </div>
      <div>
        <label>Select Physics:</label>
        <select value={selectedPhysics} onChange={handlePhysicsChange}>
          <option value="bounce">Bounce</option>
          <option value="friction">Friction</option>
          <option value="gravity">Gravity</option>
          <option value="static">Static</option>
          <option value="collision">Collision</option>
          {/* Add more options as needed */}
        </select>
        <button onClick={handleApplyPhysics}>Apply Physics</button>
      </div>
      <div>
        <label>Select Color:</label>
        <CirclePicker onChange={onColorChange} />
      </div>
    </div>
  );
};

export default GUI;
