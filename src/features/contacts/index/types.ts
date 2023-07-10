interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileUrl: string;
}

interface User extends Contact {
  onlineStatus: "Online" | "Offline";
}

export type { User, Contact };
