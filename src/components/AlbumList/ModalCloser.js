import React from 'react';

const ModalCloser = ({ handleCloseModal }) => {
  const closeModal = () => {
    handleCloseModal();
  };

  return (
    <button className="absolute top-2 right-2 text-white hover:text-gray-800" onClick={closeModal}>
      &times;
    </button>
  );
};

export default ModalCloser;
