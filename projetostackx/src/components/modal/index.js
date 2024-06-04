import React from "react";
import "./style.css";
import Button from "../button";

function Modal({ onClose, children, isOpen }) {
  //Se estiver aberto
  if (!isOpen) {
    //Senão retorna nulo
    return null;
  }
  return (
    <div className="modalBackground">
      <div className="modalContent">
        <Button
        className="close" 
        onClick={onClose}
        type="submit"
        text="Fechar"/>
        {children}
      </div>
    </div>
  );
}

export default Modal;