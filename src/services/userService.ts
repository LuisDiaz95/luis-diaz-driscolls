export interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Luis Adolfo Díaz Torres", email: "ldiaz1995@gmail.com" },
  { id: 2, name: "Juan Peréz", email: "juan.perez@gmail.com" },
];

export const getUsers = async () => {
  return users;
};

export const getUser = async (id: number) => {
  return users.find((user) => user.id === id) || null;
};

export const createUser = async (newUser: User) => {
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(newUser);
  return newUser;
};

export const updateUser = async (id: number, updatedUser: User) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    return users[index];
  }
  return null;
};

export const deleteUser = async (id: number) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    return deletedUser[0];
  }
  return null;
};
