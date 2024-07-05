import { Container, Cards, MyFilms } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { FiPlus } from 'react-icons/fi';
import {movies} from "../../mok.js"

export const Home = () => {
  return (
    <Container>
      <Header />
      <div>
        <MyFilms>
          <h1>Meus filmes</h1>
          <Button title="Adicionar filme" icon={FiPlus} />
        </MyFilms>
        <Cards>
        {
          movies.map((movie) => (<Card key={movie.id} {...movie}/>
          ))
        }
        </Cards>
      </div>
    </Container>
  );
};
