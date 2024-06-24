import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, User } from "../../services/userService";
import { useTranslation } from "react-i18next";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>{t("userList")}</h1>
      <Link to="/create-user">{t("createUser")}</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
