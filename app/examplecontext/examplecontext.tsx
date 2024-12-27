'use client'; // Required for context components in Next.js App Router

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context data
interface DataContextType {
  data: string; // Replace with your actual data type
  updateData: (newData: string) => void;
}

// Create the context with a default value
const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<string>('Initial Data');

  const updateData = (newData: string) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook to use the context
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
