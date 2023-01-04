import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src="https://avatars.githubusercontent.com/u/45568289?v=4" alt="Victor" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Descrição do repositório massa</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://avatars.githubusercontent.com/u/45568289?v=4" alt="Victor" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Descrição do repositório massa</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
