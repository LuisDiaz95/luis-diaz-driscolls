import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, User } from "../../services/userService";
import { useTranslation } from "react-i18next";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

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
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {t("userList")}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/create-user"
        sx={{ marginBottom: 2 }}
      >
        {t("createUser")}
      </Button>
      <List>
        {users.map((user) => (
          <ListItem
            key={user.id}
            component={Link}
            to={`/users/${user.id}`}
            button
          >
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserList;
