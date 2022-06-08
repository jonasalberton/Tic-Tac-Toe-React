import { useState } from 'react';
import { Container, Card, Row, MarkSwitcher, Button, PlayButton } from './styles';
import { AppIcon } from '../../elements/AppIcon';
import { PlayerMark } from '../../contexts/UserContext';

function NewGame() {

  const [playerOne, setPlayerOne] = useState<PlayerMark>(PlayerMark.X);
  

  return (
    <Container>
      <Row>
        <AppIcon/>
      </Row>
      <Card>
        <span>PICK PLAYER 1'S MARK</span>
        <MarkSwitcher>
          <Button type='button' selected={playerOne === PlayerMark.X} onClick={ () => setPlayerOne(PlayerMark.X)}>X</Button>
          <Button type='button' selected={playerOne === PlayerMark.O} onClick={ () => setPlayerOne(PlayerMark.O)}>O</Button>
        </MarkSwitcher>
        <span>REMENBER: {playerOne} GOES FIRST</span>
      </Card>

      <PlayButton type='button' color={'xPlayer'}>NEW GAME VS (CPU)</PlayButton>
      <PlayButton type='button' color={'oPlayer'}>NEW GAME VS (PLAYER)</PlayButton>

    </Container>
  )
}

export { NewGame as Home };