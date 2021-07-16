import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #12181b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
  }

  h1 {
    margin-left: 1rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;

  .login-btn {
    margin: 0rem 0.5rem;
    padding: 0.5rem 1rem;
    border: 2px solid #b02e0c;
    border-radius: 0.25rem;
    background-color: #12181b;
    transition: all 0.2s ease-in-out;

    > a {
      color: #f4f1de;
    }

    &:hover {
      color: #f4f1de;
      background-color: #42181b;
    }
  }

  .register-btn {
    margin: 0rem 0.5rem;
    padding: 0.5rem 1rem;
    border: 2px solid #b02e0c;
    border-radius: 0.25rem;
    background-color: #b02e0c;
    transition: all 0.2s ease-in-out;

    > a {
      color: #f4f1de;
    }

    &:hover {
      color: #f4f1de;
      background-color: #92181b;
    }
  }
`;
