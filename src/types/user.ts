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

export type { LoginData, RegisterData, ContactData, User, Contact };
