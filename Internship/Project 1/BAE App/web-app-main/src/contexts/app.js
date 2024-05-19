import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
AppContext.displayName = 'AppContext';

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const exposedContextValue = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={exposedContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
