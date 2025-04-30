"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useData } from "@/contexts/DataContext";
import DataTable from "@/components/DataTable";
import DataFilters from "@/components/DataFilters";
import DataPagination from "@/components/DataPagination";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";
import NoData from "@/components/NoData";

export default function DataPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const {
    data,
    loading: dataLoading,
    error: dataError,
    fetchData,
    filters,
    setFilters,
    pagination,
    setPagination,
  } = useData();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [authLoading, user, router]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user, fetchData, filters, pagination]);

  if (authLoading || dataLoading) {
    return <LoadingSpinner />;
  }

  if (dataError) {
    return (
      <ErrorMessage
        message={dataError}
        onRetry={() => fetchData()}
      />
    );
  }

  if (!data || data.length === 0) {
    return <NoData message="No data available for the selected filters" />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Data Management</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <DataFilters
          filters={filters}
          onFilterChange={setFilters}
        />
        
        <div className="mt-6">
          <DataTable data={data} />
        </div>
        
        <div className="mt-6">
          <DataPagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={(page) => setPagination({ ...pagination, currentPage: page })}
          />
        </div>
      </div>
    </div>
  );
} 