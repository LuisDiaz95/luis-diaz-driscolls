// src/components/Users/UserDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getUser, deleteUser, User } from "../../services/userService";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(Number(id));
        setUser(userData);
      } catch (error) {
        console.error("There was an error fetching the user!", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteUser(Number(id));
      navigate("/users");
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Detail</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleDelete}>Delete User</button>
      <Link to={`/edit-user/${user.id}`}>Edit User</Link>
    </div>
  );
};

export default UserDetail;
