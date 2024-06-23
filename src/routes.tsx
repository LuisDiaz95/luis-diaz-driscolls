import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/Users/UserList";
import NewsList from "./components/News/NewsList";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/users" Component={UserList} />
      <Route path="/news" Component={NewsList} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
