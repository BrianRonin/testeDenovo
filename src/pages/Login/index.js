import React from 'react';
import { Titulo, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function login() {
  return (
    <Container>
      <Titulo isRed={false}>
        Login
        <small>Oie</small>
      </Titulo>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nisi accusantium aut exercitationem? Magni error eaque nihil
      </Paragrafo>
      <button type='button'>Enviar</button>
    </Container>
  );
}
