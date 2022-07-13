import React, { useEffect, useRef } from 'react';
import './style.css';
import { AnimatePresence, motion } from 'framer-motion';

type props = {
  children: React.ReactNode;
  isOpen: boolean;
  hide: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<props> = ({ children, isOpen, hide }) => {
  let modalContentRef = useRef<HTMLDivElement>(null);

  /***
   * Handle outside click fuction
   * 
    This function will set the isOpen 
    state to false if user click outside 
    of the modal content.
  ***/
  const handleOutSideClick = (e: any) => {
    if (!modalContentRef.current?.contains(e.target)) {
      hide(false);
    }
  };

  useEffect(() => {
    document?.addEventListener('mousedown', handleOutSideClick);

    // removing the event listener
    return () => {
      document?.removeEventListener('mousedown', handleOutSideClick);
    };
  });
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.2,
            },
          }}
          className="modal-backdrop"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.2,
              },
            }}
            className="modal-wrapper"
            ref={modalContentRef}
          >
            <div className="modal-content">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
