import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FiDollarSign, FiFilm, FiLock, FiMail, FiUsers } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Container, Content, Messages } from './style';
import { useAuth } from '../../context/AuthContext';

import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

interface SingInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { singIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(5, 'Minimo 5 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        singIn({
          email: data.email,
          password: data.password,
        });
      } catch (e) {
        const errors = getValidationErrors(e);

        formRef.current?.setErrors(errors);
      }
    },
    [singIn],
  );

  return (
    <Container>
      <Messages>
        <div className="card">
          <div className="card-icon">
            <FiFilm size={48} />
          </div>
          <div>
            <h1>Cadastre seus espetáculos</h1>
            <span>
              Adicione, remova e edite eventos
              <br />
              Defina horários e salas
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <FiUsers size={48} />
          </div>
          <div>
            <h1>Gerenciamento de lotação</h1>
            <span>Visualize as poltronas reservadas e livres</span>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <FiDollarSign size={48} />
          </div>
          <div>
            <h1>Controle financeiro</h1>
            <span>Acompanhe as arrecadações de cada evento</span>
          </div>
        </div>
      </Messages>
      <Content>
        <h3>Já tem cadastro?</h3>
        <span>Digite seus dados para entrar</span>
        <Form className="form" ref={formRef} onSubmit={handleSubmit}>
          <Input icon={FiMail} name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <button type="submit">ENTRAR</button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
