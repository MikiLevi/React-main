import { Route, Routes } from "react-router-dom";
import Users from "../users/Users";
import ErrrorPages from "../pages/ErrrorPages";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome Miki to the CLASS!!!</h1>} />
        <Route path="/users/*" element={<Users />} />
        <Route path="*" element={<ErrrorPages />} />
      </Routes>
    </>
  );
}
