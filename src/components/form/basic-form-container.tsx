import { Form } from "antd";
import BaseButton from "./button";
interface FormContainerProps {
  children: ChildrenType;
  onSubmit: (vals: ObjectOfStringAndNumbers) => void;
}

export default function BasicFormContainer({
  children,
  onSubmit,
}: FormContainerProps) {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" onFinish={onSubmit} form={form}>
      {children}
      <BaseButton label="Create Contact" onClick={form.submit} />
    </Form>
  );
}
