type LoginData = {
  email: string;
  password: string;
};
type RegisterData = LoginData & {
  fullname: string;
};

type ContactData = {
  fullname: string;
  email: string;
  userId: string;
};

interface User {
  id: string;
  email: string;
  fullname: string;
  photoUrl: string;
}

interface Contact extends User {
  userId: string;
  // onlineStatus: "Online" | "Offline";
}

type DeleteContactType = {
  id: string;
  userId: string;
};

export type {
  LoginData,
  RegisterData,
  ContactData,
  User,
  Contact,
  DeleteContactType,
};
