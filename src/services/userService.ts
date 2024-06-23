export interface User {
  id: number;
  name: string;
  email: string;
}

export const getUsers = async () => {
  var response: User[] = [
    { id: 1, name: "Luis Adolfo Díaz Torres", email: "ldiaz1995@gmail.com" },
    { id: 2, name: "Juan Peréz", email: "juan.perez@gmail.com" },
  ];
  return response;
};
