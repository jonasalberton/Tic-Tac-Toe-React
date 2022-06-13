import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from '../../models/routes';
import { AppIcon } from '../../elements/AppIcon';
import { PlayerMark } from '../../models/player';
import UserContext from '../../contexts/UserContext';
import { Container, Card, Row, MarkSwitcher, Button, PlayButton } from './styles';

function NewGame() {
  const {setState, firstPlayerMark} = useContext(UserContext);
  const [playerOne, setPlayerOne] = useState<PlayerMark>(firstPlayerMark || PlayerMark.X);
  const navigate = useNavigate();

  const newGameCpuHandler = () => {
    setState(playerOne, true);
    startGame();
  }

  const newGamePlayerHandler = () => {
    setState(playerOne, false);
    startGame();
  }
  
  const startGame = () => {
    navigate(Routes.BOARD);
  }

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

      <PlayButton type='button' color={'xPlayer'} onClick={newGameCpuHandler}>NEW GAME VS (CPU)</PlayButton>
      <PlayButton type='button' color={'oPlayer'} onClick={newGamePlayerHandler}>NEW GAME VS (PLAYER)</PlayButton>

    </Container>
  )
}

export { NewGame as Home };