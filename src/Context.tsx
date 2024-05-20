import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context
export interface MyContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with default values
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;

