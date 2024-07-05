import { Container, Text } from './styles';
import { Tag } from '../Tag';
import { IoIosStarOutline } from 'react-icons/io';
import { IoIosStar } from 'react-icons/io';

export const Card = ({ title, description, tags }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div className="star">
        <IoIosStar size={15} />
        <IoIosStar size={15} />
        <IoIosStar size={15} />
        <IoIosStar size={15} />
        <IoIosStarOutline size={15} />
      </div>
      <Text>
        <p>{description}</p>
      </Text>
      <div>
        {tags && tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
      </div>
    </Container>
  );
};
