import { createContext, useState } from "react";

interface Context {
  vsCpu: boolean;
  fisrtPlayer: PlayerMark;
  secondPlayer: PlayerMark;
};

export enum PlayerMark {
  X = 'X',
  O = 'O'
};

const INITIAL_STATE: Context = {
  fisrtPlayer: PlayerMark.X,
  secondPlayer: PlayerMark.O,
  vsCpu: false
}

const UserContext = createContext(INITIAL_STATE);


function UserContextProvider(props: any) {
  


  return (
    // <UserContext.Provider value={{fisrtPlayer: '', secondPlayer: '', vsCpu: false}} >
    //   {props.children}
    // </UserContext.Provider>

    <>
    {props.children}
    </>
  )
}



export { UserContext, UserContextProvider };