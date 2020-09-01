import React, { Dispatch, SetStateAction, FormEvent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Input from 'components/common/Input';

interface ContactProps {
  showContact: Dispatch<SetStateAction<boolean>>;
  showAbout: Dispatch<SetStateAction<boolean>>;
}

const ContactWrapper = styled(motion.div)`
  width: 100%;
  background: ${(p) => p.theme.palette.background.contact};
`;

const ContactContent = styled.div`
  margin: 0 auto;
  padding: 50px 10px;

  justify-content: center;
  position: relative;

  background: ${(p) => p.theme.palette.background.contact};

  h2 {
    color: #e1a87a;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }

  form {
    width: 100%;
    display: grid;
    grid-row-gap: 10px;

    label {
      text-align: left;
    }

    input,
    textarea {
      border: thin solid lightgray;
    }

    button {
      border: none;
      cursor: pointer;
      padding: 5px;
      border-radius: 4px;
    }

    input:focus,
    textarea:focus {
      background: rgb(241, 241, 241, 0.5);
    }
  }

  .action-buttons {
    text-align: left;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 5px;

    .submit {
      background: #0d0d0d;
      color: rgb(241, 166, 15);
      &:hover {
        background: grey;
      }
    }

    .reset {
      background: #e1a87a;
      color: #151515;
      &:hover {
        background: rgb(255, 211, 14);
      }
    }
  }

  .about-redirect {
    &:hover {
      color: #fff;
      background: lightgrey;
    }
  }

  @media (min-width: 600px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;
const Contact: React.FC<ContactProps> = ({ showContact, showAbout }) => {
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
      <ContactContent>
        <h2>Thanks for reaching out!</h2>
        <form onSubmit={submitHandler}>
          <Input label="Email" />
          <Input label="Message" type="textarea" />
          <div className="action-buttons">
            <button className="submit" type="submit">
              Submit
            </button>
            <button className="reset" type="reset">
              Reset
            </button>
          </div>
          <button
            className="about-redirect"
            onClick={() => {
              showContact(false);
              showAbout(true);
            }}
          >
            Learn More About Me
          </button>
        </form>
      </ContactContent>
    </ContactWrapper>
  );
};

export default Contact;
