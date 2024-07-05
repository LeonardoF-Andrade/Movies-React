import { Container } from './styles';

export const Button = ({ title, icon: Icon, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
};
