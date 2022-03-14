import React from "react";
import ReactDOM from "react-dom";

const ModalPortal: React.FC = ({ children }) => {
  const el = document.getElementById("modal-portal");
  if (!el) return <div>{children}</div>;
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
