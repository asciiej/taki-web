import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
