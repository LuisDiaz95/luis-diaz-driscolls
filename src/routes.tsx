import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/Users/UserList";
import UserDetail from "./components/Users/UserDetail";
import UserForm from "./components/Users/UserForm";
import NewsList from "./components/News/NewsList";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/users" Component={UserList} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/create-user" element={<UserForm />} />
      <Route path="/edit-user/:id" element={<UserForm />} />
      <Route path="/news" element={<NewsList />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
