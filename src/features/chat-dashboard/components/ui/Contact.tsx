import CardTemplate from "./CardTemplate";

interface ContactProp {
  name: string;
  aboutme: string;
  picUrl: string;
}

export default function Contact({ name, aboutme, picUrl }: ContactProp) {
  return <CardTemplate name={name} text={aboutme} picUrl={picUrl} />;
}
