import { Form } from "antd";
import BaseButton from "./button";
interface FormContainerProps {
  btnLabel: string;
  children: ChildrenType;
  onSubmit: (vals: ObjectOfStringAndNumbers) => void;
}

export default function BasicFormContainer({
  btnLabel,
  children,
  onSubmit,
}: FormContainerProps) {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" onFinish={onSubmit} form={form}>
      {children}
      <BaseButton label={btnLabel} onClick={form.submit} />
    </Form>
  );
}
