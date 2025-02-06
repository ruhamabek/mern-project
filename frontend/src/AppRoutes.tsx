import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>HOME PAGE</Layout>} />
      <Route path="/Profile" element={<Layout>PROFILE</Layout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRoutes;
