type LoginData = {
  email: string;
  password: string;
};
type RegisterData = LoginData & {
  fullname: string;
};

type ContactData = {
  name: string;
  email: string;
  phpne: number;
};

interface User {
  id: string;
  email: string;
  fullname: string;
  photoUrl: string;
}

export type { LoginData, RegisterData, ContactData, User };
