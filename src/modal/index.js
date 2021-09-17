import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

export const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  )
}