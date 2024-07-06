import { Container, Section } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { FaArrowLeft } from 'react-icons/fa6';
import { Marcador } from '../../components/Marcadores';
// import { Section } from '../../components/Section';

export const New = () => {
  return (
    <Container>
      <Header />
      <main>
        <ButtonText title="Voltar" icon={FaArrowLeft} />
        <h1>Novo Filme</h1>
        <div>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>
        <TextArea placeholder="Observações" />
        <Section>
          <h2>Marcadores</h2>
          <div className="Note">
            <Marcador value="React" />
            <Marcador isNew placeholder="Novo Marcador" />
          </div>
        </Section>
        <div>
          <Button title="Excluir filme" className="Excluir" />
          <Button title="Salvar alterações" />
        </div>
      </main>
    </Container>
  );
};
