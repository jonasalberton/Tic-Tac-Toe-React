import { styled } from '../../stitches.config';
import { Typograph } from '../Typograph';

const Container = styled('div', {
  display: 'flex',
  gap: '.5rem',
  userSelect: 'none',
  lineHeight: 1
});

function AppIcon() {
  return (
    <Container>
      <Typograph size={'lg'} bold={true} color={'xPlayer'}>X</Typograph>
      <Typograph size={'lg'} bold={true} color={'oPlayer'}>O</Typograph>
    </Container>
  );
}

export { AppIcon };
