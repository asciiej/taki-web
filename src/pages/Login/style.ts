import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 2rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);

  background-color: #a62639;
  padding: 2rem;
  border-radius: 1rem;

  .form {
    margin-top: 2rem;
  }

  button {
    margin-top: 2rem;
    width: 100%;
    border: none;
    background-color: #22181c;
    padding: 1rem;
    color: white;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #2e282a;
      transform: scale(0.95);
    }
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 840px) {
    display: none;
  }

  .card {
    background-color: #a62639;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    & + div {
      margin-top: 1rem;
    }

    .card-icon {
      margin-right: 1rem;
    }
  }
`;
