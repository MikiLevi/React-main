import React, { Children } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Login from "../../pages/Login";

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <>
    <Link to={'/login'}>Login</Link>
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
      <main>{children}</main>
    </>
  );
}
