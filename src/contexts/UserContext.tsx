import { createContext, useState } from "react";
import { PlayerMark } from "../models/player";

const GameContext = createContext({
  firstPlayerMark: PlayerMark.X,
  isVsCpu: false,
  setState: (marker: PlayerMark, vsCPU: boolean) => {}
});


function GameContextProvider(props: any) {
  const [firstPlayerMark, setFirstPlayerMark] = useState<PlayerMark>(PlayerMark.X);
  const [isVsCpu, setIsVsCpu] = useState<boolean>(false);

  const setState = (marker: PlayerMark, vsCPU: boolean) => {
    setFirstPlayerMark(marker);
    setIsVsCpu(vsCPU);
  }

  return (
    <GameContext.Provider value={{firstPlayerMark, isVsCpu: isVsCpu, setState}}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContext;
export { GameContextProvider as UserContextProvider };