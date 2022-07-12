# zero-react-modal

# Hi, Here! 👋

## 🚀 About Zero React Modal

Zero React Modal is a functional component for ReactJS.

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save zero-react-modal
    $ yarn add zero-react-modal

## Examples

Here is a simple example of react-modal being used in an app with some custom
styles and focusable input elements within the modal content:

```jsx
import React, { useState } from 'react';
import Modal from 'zero-react-modal';

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
          dicta itaque enim nulla corrupti repellat. Asperiores sint iste beatae
          corporis aut minus, esse ab est cumque facere consequatur vero
          consequuntur ducimus? Adipisci numquam cumque perferendis sapiente,
          rerum nisi minima libero aspernatur, explicabo, quis consequatur
          dolorum distinctio ullam natus nostrum quia quidem repellendus max
        </p>
      </Modal>
    </>
  );
};

export default Index;
```
