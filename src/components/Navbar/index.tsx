import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Container, LogoLink, NavItems } from './style';

const Navbar: React.FC = () => (
  <Container>
    <LogoLink to="/">
      <Logo />
      <h1>TAKI</h1>
    </LogoLink>
    <NavItems>
      <button className="login-btn" type="button">
        <Link to="/login">ENTRAR</Link>
      </button>
      <button className="register-btn" type="button">
        <Link to="/register">REGISTRE-SE</Link>
      </button>
    </NavItems>
  </Container>
);

export default Navbar;
