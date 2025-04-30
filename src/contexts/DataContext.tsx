"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface DataItem {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface DataContextType {
  data: DataItem[];
  loading: boolean;
  error: string | null;
  fetchData: (page: number, filters?: Record<string, any>) => Promise<void>;
  totalPages: number;
  currentPage: number;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page: number, filters?: Record<string, any>) => {
    try {
      setLoading(true);
      setError(null);
      // TODO: Implement actual API call
      // Mock data for now
      const mockData = Array.from({ length: 10 }, (_, i) => ({
        id: `${i + 1}`,
        name: `Item ${i + 1}`,
        description: `Description for item ${i + 1}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));
      setData(mockData);
      setTotalPages(5);
      setCurrentPage(page);
    } catch (err) {
      setError("Failed to fetch data");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        fetchData,
        totalPages,
        currentPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
} 