type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

export interface User {
  id: string;
  email: string;
  fullname: string;
  photoUrl: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  // onlineStatus: "Online" | "Offline";
}

export interface Contact extends User {
  userId: string;
  isActive: boolean;
  ownerIds: string;
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
  ownerId: string;
};

export type DeleteContactData = {
  id: string;
  userId: string;
};

export type UpdateContactData = {
  userId: string;
  contact: Contact;
};
