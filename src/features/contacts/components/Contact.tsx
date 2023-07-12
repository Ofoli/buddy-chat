import CardTemplate from "../../../components/ui/CardTemplate";
import { Contact } from "../index/imports";

interface ContactProp {
  contact: Contact;
  onClick: () => void;
}

export default function UserContact({ contact, onClick }: ContactProp) {
  const { fullname, email, photoUrl } = contact;

  return (
    <CardTemplate
      name={fullname}
      text={email}
      picUrl={photoUrl}
      onClick={onClick}
    />
  );
}
