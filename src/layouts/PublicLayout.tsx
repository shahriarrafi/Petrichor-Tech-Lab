// layouts/PublicLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow z-30">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
