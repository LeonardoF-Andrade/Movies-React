import { Container, Header, Update, Avatar } from './styles';
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText';
import { FaArrowLeft } from 'react-icons/fa';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Profile = () => {
  return (
    <Container>
      <Header>
        <ButtonText title="Voltar" icon={FaArrowLeft} />
      </Header>
      <Avatar>
        <img
          src="https://github.com/LeonardoF-Andrade.png"
          alt="Foto de perfil"
        />
        <label>
          <input type="file" />
          <FiCamera />
        </label>
      </Avatar>
      <Update>
        <Input placeholder="Name" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <div className="password">
          <Input placeholder="Senha atual" type="password" icon={FiLock} />
          <Input placeholder="Nova senha" type="password" icon={FiLock} />
        </div>
        <Button title="Salvar" />
      </Update>
    </Container>
  );
};
