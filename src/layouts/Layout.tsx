import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  );

  // kepts for reference
  // return (
  //   <div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/eligibility">Eligibility</Link>
  //         </li>
  //         <li>
  //           <Link to="/apply">Apply</Link>
  //         </li>
  //         <li>
  //           <Link to="/applications">Applications</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //     <main>
  //       <Outlet />
  //     </main>
  //   </div>
  // );
}
