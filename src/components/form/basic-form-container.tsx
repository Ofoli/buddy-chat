import { Form } from "antd";
import { Grid } from "@mui/material";
import BaseButton from "./button";

interface FormContainerProps {
  children: ChildrenType;
  onSubmit: () => void;
}

export default function BasicFormContainer({
  children,
  onSubmit,
}: FormContainerProps) {
  const [form] = Form.useForm();

  return (
    <div>
      <Form layout="vertical" onFinish={onSubmit} form={form}>
        {children}
        <BaseButton label="Create Contact" onClick={form.submit} />
      </Form>
    </div>
  );
}
