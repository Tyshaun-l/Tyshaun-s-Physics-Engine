# 🎮 Tyshaun's Physics Engine 
Welcome to Tyshaun's Physics Engine! This project is a comprehensive physics engine built using PixiJS, MatterJS, and ReactJS. It features a user-friendly GUI that allows you to select and manipulate shapes, apply different physics types, and customize colors with support for both RGB and HEX formats.

## 🚀 Features
Shape Selection: Choose from a variety of shapes, including circles, rectangles, and polygons.
Physics Types: Apply five different physics effects, such as bounce, friction, and gravity.
Color Picker: Easily change the color of shapes using an integrated color picker with RGB and HEX support.
React Integration: Seamlessly interacts with the ReactJS framework for smooth, responsive UI.

## 🛠️ Installation
To get started with Tyshaun's Physics Engine, follow these steps:

Clone the Repository:
```
git clone https://github.com/Tyshaun-l/Tyshaun-s-Physics-Engine.git
cd tyshauns-physics-engine
```
Install Dependencies:
```
npm install
```
Run the Project
```
npm start
```
This will start a local development server and open the project in your default browser.

## 📄 Usage
Once the project is running, you can interact with the physics engine through the GUI on the left side of the screen:

Select a Shape: Use the dropdown to choose a shape.
Add the Shape: Click the "Add Shape" button to spawn the selected shape onto the canvas.
Apply Physics: Choose a physics type from the dropdown and apply it to the most recently added shape.
Change Color: Use the color picker to change the color of the shape.

## 🧩 Dependencies
Tyshaun's Physics Engine is built on the following technologies:

ReactJS - A JavaScript library for building user interfaces.
PixiJS - A fast, lightweight 2D rendering engine.
MatterJS - A 2D rigid body physics engine.
React-Color - A color picker component for React.

## 📂 File Structure
The project structure is organized as follows:

```/src
  /components
    - Canvas.js       // Handles PixiJS rendering and MatterJS integration
    - GUI.js          // Manages the user interface for shape selection and physics application
  /physics
    - PhysicsEngine.js // Contains the core logic for the physics engine
  - App.js             // Main React component that integrates Canvas and GUI
  - index.js           // Entry point for the React application
/index.html            // Main HTML file to load the project
```

## 🎉 Contributing
Contributions are welcome! If you find a bug or have a suggestion for a new feature, feel free to open an issue or submit a pull request.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for more details.

# Enjoy experimenting with physics in Tyshaun's Physics Engine! 🎨💡
