import React, { useState, useEffect } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CircularProgress from "@mui/material/CircularProgress";
import CardExpense from "../components/Fragments/CardExpense"; // Pastikan Fragment ini sudah dibuat
import { expensesBreakdowns } from "../data";

function expense() {
  // 1. State untuk mengontrol tampilan loading
  const [isLoading, setIsLoading] = useState(true);

  // 2. Efek untuk simulasi pengambilan data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Loading selama 1.5 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MainLayout>
        <div className="p-6">
          {/* Judul Halaman */}
          <h1 className="text-xl font-bold mb-6 text-gray-01">
            Expenses Comparison
          </h1>

          {/* Kondisi Loading */}
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-[60vh] text-primary">
              <CircularProgress color="inherit" size={50} />
              <p className="mt-2 font-semibold">Loading Data</p>
            </div>
          ) : (
            /* 3. Grid Tampilan Kartu Expense */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expensesBreakdowns.map((item) => (
                <CardExpense key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
}

export default expense;