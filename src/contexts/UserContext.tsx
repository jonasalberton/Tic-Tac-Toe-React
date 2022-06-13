import { createContext, useState } from "react";
import { PlayerMark } from "../models/player";

const UserContext = createContext({
  firstPlayerMark: PlayerMark.X,
  isVsCpu: false,
  setState: (marker: PlayerMark, vsCPU: boolean) => {}
});


function UserContextProvider(props: any) {
  const [firstPlayerMark, setFirstPlayerMark] = useState<PlayerMark>(PlayerMark.X);
  const [isVsCpu, setIsVsCpu] = useState<boolean>(false);

  const setState = (marker: PlayerMark, vsCPU: boolean) => {
    setFirstPlayerMark(marker);
    setIsVsCpu(vsCPU);
  }

  return (
    <UserContext.Provider value={{firstPlayerMark, isVsCpu: isVsCpu, setState}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext;
export { UserContextProvider };