import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getUser,
  createUser,
  updateUser,
  User,
} from "../../services/userService";
import { useTranslation } from "react-i18next";
import { Button, Container, TextField, Typography } from "@mui/material";

const UserForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [user, setUser] = useState<User>({ id: 0, name: "", email: "" });
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const userData = await getUser(Number(id));
          setUser(userData ?? { id: 0, name: "", email: "" });
        } catch (error) {
          console.error("There was an error fetching the user!", error);
        }
      };

      fetchUser();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (id) {
        await updateUser(Number(id), user);
      } else {
        await createUser(user);
      }
      navigate("/users");
    } catch (error) {
      console.error(
        `There was an error ${id ? t("updating") : t("creating")} ${t(
          "theUser"
        )}!`,
        error
      );
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {id ? t("editUser") : t("createUser")}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label={t("userName")}
          name="name"
          value={user.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label={t("userEmail")}
          name="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          {id ? t("updateUser") : t("createUser")}
        </Button>
      </form>
    </Container>
  );
};

export default UserForm;
