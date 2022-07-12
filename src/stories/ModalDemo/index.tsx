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
          dicta itaque enim nulla corrupti repellat. Asperiores sint iste beatae
          corporis aut minus, esse ab est cumque facere consequatur vero
          consequuntur ducimus? Adipisci numquam cumque perferendis sapiente,
          rerum nisi minima libero aspernatur, explicabo, quis consequatur
          dolorum distinctio ullam natus nostrum quia quidem repellendus maxime
          voluptas autem nihil magnam. Veritatis libero nisi similique quam amet
          quos nam obcaecati possimus voluptatibus pariatur, aut commodi ipsum
          dignissimos sint eaque fuga incidunt ipsa a maiores officia esse
          adipisci. Rerum animi, veritatis odit amet illum perspiciatis quod
          deserunt qui rem inventore officiis natus quisquam ab minima aliquam
          molestiae repudiandae eius vel, labore facere expedita odio! Enim
          inventore nihil aut at est harum tenetur illo accusantium quam
          necessitatibus perferendis dolorem, temporibus laudantium voluptatum
          exercitationem. Maiores neque officiis blanditiis impedit nihil cumque
          assumenda dolorum et consequatur, a ab quis laboriosam aperiam qui
          explicabo vel eum sequi quod enim vero, veniam illum eligendi?
          Incidunt sed nulla praesentium minima similique aspernatur sit modi
          nihil aperiam aliquam quam, doloremque aut ipsa itaque rem.
        </p>
      </Modal>
    </>
  );
};

export default Index;
