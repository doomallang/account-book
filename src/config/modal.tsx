// Modal.tsx
import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  open: boolean
  onClose: () => void
  classname: string
  children: ReactNode
}

const Modal = ({ open, onClose, classname, children }: ModalProps) => {
  typeof window !== 'undefined'
    ? window.addEventListener('click', (e) => {
        const { target } = e
        if (target instanceof HTMLElement) {
          const className = target.className.toString()
          if (className.indexOf('overlayStyle') !== -1) {
            onClose()
          }
        }
      })
    : null

  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <div className="overlayStyle" />
      <div className={classname}>
        <div className={'modal-contents'}>{children}</div>
        <div>
          <button className="modal-button" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
      <style jsx>{`
        .overlayStyle {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 5;
        }
        .modalStyle {
          position: fixed;
          top: 65%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 70vh;
          background-color: #ffffff;
          z-index: 5;
        }
        .modalStyle2 {
          position: fixed;
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 40vh;
          background-color: #ffffff;
          z-index: 5;
        }
        .modal-contents {
          overflow-y: auto;
          max-height: calc(100% - 150px);
        }
        .modal-button {
          outline: none;
          border: none;
          background: transparent;
          width: 80px;
          height: 40px;
          padding: 10px 25px;
          position: absolute;
          bottom: 0px;
          right: 0px;
        }
      `}</style>
    </>,
    document.getElementById('global-modal') as HTMLElement,
  )
}

export default Modal
