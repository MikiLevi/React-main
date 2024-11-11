import { Route, Routes } from "react-router-dom";
import Users from "../users/Users";
import DisplayUsers2 from "../users/DisplayUsers2";
import Login from "../pages/Login";
import EditUser from "../users/EditUser";
import ErrrorPages from "../pages/ErrrorPages";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome Miki to the CLASS!!!</h1>} />
        <Route path="/users/*" element={<Users />} />
        <Route path="*" element=
          {
            <>
              <h3>אחי אין כאן עדיין כלוםםם</h3>
              <h3>האתר בבניה</h3>
              <h1>🧱🏗️🛑🚧🚜⛔</h1>
            </>
          } />
        <Route path="/Display" element={<DisplayUsers2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<ErrrorPages />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
