import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-[4.5rem] lg:pt-[5.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
