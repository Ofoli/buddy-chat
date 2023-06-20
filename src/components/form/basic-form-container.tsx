import { Form } from "antd";
import BaseButton from "./button";
interface FormContainerProps<T> {
  btnLabel: string;
  children: ChildrenType;
  onSubmit: (vals: T) => void;
}

export default function BasicFormContainer<T>({
  btnLabel,
  children,
  onSubmit,
}: FormContainerProps<T>) {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" onFinish={onSubmit} form={form}>
      {children}
      <BaseButton label={btnLabel} onClick={form.submit} />
    </Form>
  );
}
