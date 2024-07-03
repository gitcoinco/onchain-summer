import { Navbar } from "@/components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const bodyClass =
      pathname !== "/" && pathname !== "/applications"
        ? "bg-blue-gradient"
        : "bg-orange-sunset";

    document.body.classList.add(bodyClass);

    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [pathname]);

  return (
    <div className="h-screen">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
