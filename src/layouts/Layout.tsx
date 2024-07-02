import { Navbar } from "@/components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

// To be changed the theme / css
const backgroundColor: { [key: string]: string } = {
  "/": "bg-[#FF8744]",
  "/applications": "bg-[#FF8744]",
  "/rewards": "",
};
export function Layout() {
  const { pathname } = useLocation();

  return (
    <div className={`h-screen ${backgroundColor[pathname] || ""}`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
