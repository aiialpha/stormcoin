import { useContext } from 'react';
import MyContext, { MyContextType } from './Context';

// Custom hook for using the context
const useAppContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default useAppContext;
