import React, { Dispatch, SetStateAction, FormEvent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Input from 'components/common/Input';

interface ContactProps {
  showContact: Dispatch<SetStateAction<boolean>>;
}

const ContactWrapper = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
  padding: 50px 10px;

  justify-content: center;
  position: relative;

  form {
    width: 100%;
    display: grid;
    grid-row-gap: 10px;

    label {
      text-align: left;
    }

    textarea {
    }
  }

  .action-buttons {
    text-align: left;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 5px;

    button {
      padding: 5px;
      border-radius: 4px;
    }
  }

  @media (min-width: 600px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const Contact: React.FC<ContactProps> = ({ showContact }) => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted');
  };
  return (
    <ContactWrapper
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 1, delay: 0.3 },
      }}
    >
      <h2>Thank you for contacting me :D</h2>
      <form onSubmit={submitHandler}>
        <Input label="Email" />
        <Input label="Message" type="textarea" />
        <div className="action-buttons">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <button onClick={() => showContact(false)}>Back</button>
        </div>
      </form>
    </ContactWrapper>
  );
};

export default Contact;
