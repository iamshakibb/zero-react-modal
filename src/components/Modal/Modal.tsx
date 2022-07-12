import React from 'react';
import './style.css';
import { AnimatePresence, motion } from 'framer-motion';

type props = {
  children: JSX.Element;
  isOpen: boolean;
  hide: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<props> = ({ children, isOpen, hide }) => {
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
          onClick={() => hide(false)}
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
          >
            <div className="modal-content">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
