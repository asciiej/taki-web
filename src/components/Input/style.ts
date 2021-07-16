import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #333;
  border-radius: 10px;
  border: 2px solid #333;
  padding: 0.5rem;
  width: 100%;

  color: #ede7d9;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 1rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #b02e0c;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #a62639;
      border-color: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.1);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #b02e0c;
    `}

  input {
    flex: 1;
    background: transparent;
    border: none;
    padding: 0.5rem;
    color: #ede7d9;

    &::placeholder {
      color: #ede7d9;
    }
  }

  > svg {
    margin-right: 0.5rem;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 1rem;

  svg {
    color: #a62639;
    margin: 0;
  }
`;
