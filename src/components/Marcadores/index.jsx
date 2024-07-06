import { Container } from './styles';
import { FiX, FiPlus } from 'react-icons/fi';

export const Marcador = ({ value, isNew = false, onClick, ...rest }) => {
  return (
    <Container $isnew={isNew.toString()}>
      <input
        type="text"
        {...rest}
        readOnly={!isNew}
        value={value}
      />
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};
