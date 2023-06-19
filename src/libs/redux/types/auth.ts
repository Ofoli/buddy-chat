interface User {
  id: string;
  email: string;
  fullname: string;
  profileSrc: string;
}

type AuthState = {
  user: User | null;
  loggedIn: boolean;
};

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  fullname: string;
  email: string;
  password: string;
};

export type { AuthState, User, LoginData, RegisterData };
