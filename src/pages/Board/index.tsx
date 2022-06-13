import { useContext } from 'react';

import UserContext from '../../contexts/UserContext';

function Board() {
  const { isVsCpu, setState, firstPlayerMark } = useContext(UserContext);
  

  return (
    <h1>Hello from board, {firstPlayerMark}</h1>
  );
}

export { Board };