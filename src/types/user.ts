export interface User {
  id: string;
  email: string;
  fullname: string;
  photoUrl: string;
}

export interface Contact extends User {
  userId: string;
  // onlineStatus: "Online" | "Offline";
}

export interface Chat {
  id: string;
  channelId: string;
  source: string;
  destination: string;
  message: string;
  createdAt: string;
  // isPhoto: boolean;
  // photoUrl: string;
}

export type ChatData = Omit<Chat, "id" | "createdAt">;

export type LoginData = {
  email: string;
  password: string;
};
export type RegisterData = LoginData & {
  fullname: string;
};

export type ContactData = {
  fullname: string;
  email: string;
  userId: string;
};

export type DeleteContactType = {
  id: string;
  userId: string;
};
