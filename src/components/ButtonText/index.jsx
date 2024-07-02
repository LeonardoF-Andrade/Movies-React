import { Container } from './styles';
import { FaArrowLeftLong } from "react-icons/fa6";

export const ButtonText = ({ title, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      <FaArrowLeftLong />
      {title}
    </Container>
  );
}
