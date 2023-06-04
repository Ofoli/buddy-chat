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
export type { LoginData, RegisterData, ContactData };
