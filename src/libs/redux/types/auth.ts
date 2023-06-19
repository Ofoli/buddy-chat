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
type LoginPayload = {
  email: string;
  password: string;
};

export type { AuthState, User, LoginPayload };
