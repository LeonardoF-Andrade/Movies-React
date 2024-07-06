import { Container, Background, Form } from './styles';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { FaArrowLeft } from 'react-icons/fa';

export const SignOut = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <label>Aplicação para acompanhar tudo que assistir</label>
        <h2>Crie sua conta</h2>
        <div>
          <Input placeholder="Nome" type="text" icon={FiUser} />
          <Input placeholder="E-mail" type="email" icon={FiMail} />
          <Input placeholder="Senha" type="password" icon={FiLock} />
          <Button title="Cadastrar" />
          <ButtonText title="Voltar para o login" icon={FaArrowLeft} />
        </div>
      </Form>
      <Background />
    </Container>
  );
};
