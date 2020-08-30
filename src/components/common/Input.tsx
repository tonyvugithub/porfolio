import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type?: string;
  label: string;
}

const InputWrapper = styled.div`
  display: grid;
  grid-row-gap: 5px;
  input,
  textarea {
    padding: 5px;
  }
`;

const Input: React.FC<InputProps> = ({ type, label }) => {
  let input = <input id={label} />;
  if (type && type === 'textarea') {
    input = <textarea id={label} rows={10} />;
  }
  return (
    <InputWrapper>
      <label>{label}</label>
      {input}
    </InputWrapper>
  );
};

export default Input;
