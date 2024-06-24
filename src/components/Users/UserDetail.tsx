import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getUser, deleteUser, User } from "../../services/userService";
import { useTranslation } from "react-i18next";
import { Button, Container, Typography } from "@mui/material";

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

  if (!user) return <Typography>{t("loading")}</Typography>;

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {t("userDetail")}
      </Typography>
      <Typography variant="body1">
        {t("userName")}: {user.name}
      </Typography>
      <Typography variant="body1">
        {t("userEmail")}: {user.email}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDelete}
        sx={{ marginRight: 2 }}
      >
        {t("deleteUser")}
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/edit-user/${user.id}`}
      >
        {t("editUser")}
      </Button>
    </Container>
  );
};

export default UserDetail;
