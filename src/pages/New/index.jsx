import { FaArrowLeft } from 'react-icons/fa6';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Marcador } from '../../components/Marcadores';
import { TextArea } from '../../components/TextArea';
import { Container, Section } from './styles';
// import { Section } from '../../components/Section';
import { useState } from 'react';

export const New = () => {
  const [markers, setMarkers] = useState(['React', 'Node']);

  const handleAddMarkerClick = (value) => {
    setMarkers((prevMarkers) => [...prevMarkers, value]);
  };

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
            {markers.map((marker) => (
              <Marcador key={marker} value={marker} />
            ))}
            <Marcador isNew placeholder="Novo Marcador" onAddClick={handleAddMarkerClick}/>
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
