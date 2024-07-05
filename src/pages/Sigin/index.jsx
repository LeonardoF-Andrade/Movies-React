import { Container, Background, Form } from './styles';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';

export const SignIn = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <label>Aplicação para acompanhar tudo que assistir</label>
        <h2>Faça seu Login</h2>
        <div>
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar" />
        <ButtonText title="Criar conta" />
        </div>
      </Form>
      <Background />
    </Container>
  );
};
