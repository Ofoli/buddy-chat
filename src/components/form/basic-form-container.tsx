import { Form } from "antd";
import BaseButton from "./button";
interface FormContainerProps<T> {
  btnLabel: string;
  children: ChildrenType;
  isLoading?: boolean;
  onSubmit: (vals: T) => void;
}

export default function BasicFormContainer<T>({
  btnLabel,
  children,
  onSubmit,
  isLoading,
}: FormContainerProps<T>) {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" onFinish={onSubmit} form={form}>
      {children}
      <BaseButton onClick={form.submit} loading={isLoading}>
        {btnLabel}
      </BaseButton>
    </Form>
  );
}
