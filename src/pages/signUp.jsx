import React, { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import AppSnackbar from "../components/Elements/AppSnackbar";

function signUp() {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleCloseSnackbar = () => setSnackbar((prev) => ({ ...prev, open: false }));

  const handleSignUp = async (name, email, password) => {
    try {
      await registerService(name, email, password);
      setSnackbar({ open: true, message: "Register Berhasil", severity: "success" });
      
      // Beri jeda sebentar agar user bisa baca snackbar sebelum pindah ke login
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setSnackbar({ open: true, message: err.msg || "Registration failed", severity: "error" });
      throw err; // Lempar error agar Formik tahu proses gagal
    }
  };

  return (
    <AuthLayout>
      <FormSignUp onSubmit={handleSignUp} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default signUp;