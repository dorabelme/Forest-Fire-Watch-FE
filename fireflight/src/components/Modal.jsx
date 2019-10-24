import React from "react";

const Modal = ({ handleClose, show, children }) => {
  console.log("children", children)
  return (
    <div className="model-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0"
      }}
    >
      <div>
        {children}
        {/* <button onClick={handleClose}>close</button> */}
      </div>

    </div>
  );
};

export default Modal;