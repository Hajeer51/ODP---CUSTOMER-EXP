import React, { createContext, useState, useMemo, ReactNode } from 'react';

interface Customer {
  name: string;
  id: string;
}

interface CustomerContextType {
  selectedCustomer: Customer | null;
  setSelectedCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
}

export const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

interface CustomerProviderProps {
  children: ReactNode;
}

export const CustomerProvider: React.FC<CustomerProviderProps> = ({ children }) => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>({ name: 'Oman Broad Band', id: '12345678' });

  const contextValue = useMemo(() => ({
    selectedCustomer,
    setSelectedCustomer,
  }), [selectedCustomer]);

  return (
    <CustomerContext.Provider value={contextValue}>
      {children}
    </CustomerContext.Provider>
  );
}; 