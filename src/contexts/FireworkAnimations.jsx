import { createContext, useContext, useState } from "react";

const FireworkAnimationsContext = createContext({});

export const FireworkAnimationsProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(-1);
  const [animations, setAnimations] = useState([]);

  return (
    <FireworkAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {props.children}
    </FireworkAnimationsContext.Provider>
  );
};

export const useFireworkAnimations = () => {
  return useContext(FireworkAnimationsContext);
};