import {Container, Profile} from './styles';
import {Input} from '../Input';
import {ButtonText} from '../ButtonText';

export const Header = () => {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile>
        <div>
          <span>Leonardo Andrade</span>
          <ButtonText title="sair"/>
        </div>
        <img src="https://github.com/LeonardoF-Andrade.png" alt="" />
      </Profile>
    </Container>
  );
}
