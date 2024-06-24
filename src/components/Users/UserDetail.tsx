// src/components/Users/UserDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getUser, deleteUser, User } from "../../services/userService";
import { useTranslation } from "react-i18next";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  if (!user) return <div>{t("loading")}</div>;

  return (
    <div>
      <h1>{t("userDetail")}</h1>
      <p>{t("userName")}: {user.name}</p>
      <p>{t("userEmail")}: {user.email}</p>
      <button onClick={handleDelete}>{t("deleteUser")}</button>
      <Link to={`/edit-user/${user.id}`}>{t("editUser")}</Link>
    </div>
  );
};

export default UserDetail;
