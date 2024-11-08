import React from "react";

const CanvasOverlay = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <p style={{ backgroundColor: "white", color: "black" }}></p>
    </div>
  );
};

export default CanvasOverlay;
