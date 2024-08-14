import { Navbar } from "@/components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const bodyClass = "bg-black"
    // TODO leaving this in because we might need dynamic body classes and this code works
      // pathname !== "/" && pathname !== "/applications"
      //   ? "bg-blue-gradient"
      //   : "bg-black";

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
