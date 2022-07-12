import React, { useState } from 'react';
import Modal from '../../components/Modal';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen((prev) => !isOpen)}>Open Modal</button>
      </div>

      <Modal isOpen={isOpen} hide={setIsOpen}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum
          sed culpa molestiae aperiam quaerat suscipit! Repellat earum libero
          repellendus doloribus minus nam. Ut et modi voluptatem reprehenderit.
          Aliquam optio tempore veniam reprehenderit amet, delectus nisi ex
        </p>
      </Modal>
    </>
  );
};

export default Index;
