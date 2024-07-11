import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';
// eslint-disable-next-line
export const Marcador = ({ value, isNew = false, onClick, ...rest }) => {
  return (
    <Container $isnew={isNew.toString()}>
      {isNew ? (
        <input type="text" {...rest} readOnly={!isNew} value={value} />
      ) : (
        <span>{value}</span>
      )}
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};
