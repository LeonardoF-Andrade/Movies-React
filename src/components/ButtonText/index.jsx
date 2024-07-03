import { Container } from './styles';
import { FaArrowLeftLong } from 'react-icons/fa6';

export const ButtonText = ({ icon: Icon, title, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
};
