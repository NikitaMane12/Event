import { Route, Routes } from "react-router-dom";

import Login from "../Page/Login";
import AppNavbar from "../Components/AppNavbar";

import FindEvent from "../Page/FindEvent";

// import FindEvent from "../Page/FindEvent";

export const AllRoutes = () => {
  return (
    <>
      <AppNavbar />

      <Routes>
        <Route path="/auth" element={<Login />} />

        {/* <Route path="/findEvents" element={<FindEvent />} /> */}
        <Route path="/FindEvent" element={<FindEvent />} />
      </Routes>
    </>
  );
};
