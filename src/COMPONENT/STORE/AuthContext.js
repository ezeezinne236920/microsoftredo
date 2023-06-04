import React, { useState } from "react";

const AuthContext = React.createContext({ isVisible: true }, { toggle: true });
const AuthContextProvider = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [toggle, setToggle] = useState(true);

  return (
    <AuthContext.Provider value={{ isVisible: isVisible, toggle: toggle }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
