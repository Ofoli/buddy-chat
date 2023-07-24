import { Select, Form, Input, InputNumber } from "antd";
import type { Rule } from "antd/lib/form";
import classes from "./basic-input.module.css";

interface BaseInputProps {
  name: string;
  label: string;
}

interface TextInputProps extends BaseInputProps {
  type: "text" | "email";
}
interface SelectInputProps extends BaseInputProps {
  disabled: boolean;
  options: { name: string; value: string }[];
}

const TextRules: Rule[] = [{ required: true, message: "Please input a name!" }];
const EmailRules: Rule[] = [
  { type: "email", message: "Please enter a valid email address" },
  { required: true, message: "Email field cannot be empty!" },
];
const NumberRules: Rule[] = [
  { required: true, message: "Number cannot be empty" },
  {
    type: "number",
    message: "Please enter a valid phone number",
  },
  { validator: validateNumber },
];
const PasswordRules: Rule[] = [
  { required: true, message: "Password field cannot be empty!" },
];

function Text({ name, label, type }: TextInputProps) {
  const rules = type === "text" ? TextRules : EmailRules;
  return (
    <Form.Item
      className={classes.antd_form_item}
      name={name}
      label={label}
      rules={rules}
    >
      <Input className={classes.antd_form_input_text} />
    </Form.Item>
  );
}
function DisabledFormItem(props: BaseInputProps) {
  return (
    <Form.Item className={classes.antd_form_item} {...props}>
      <Input className={classes.antd_form_input_text} disabled={true} />
    </Form.Item>
  );
}
function PasswordInput(props: BaseInputProps) {
  return (
    <Form.Item
      className={classes.antd_form_item}
      {...props}
      rules={PasswordRules}
    >
      <Input.Password
        className={classes.antd_form_input_text}
        autoComplete=""
      />
    </Form.Item>
  );
}
function TextArea(props: BaseInputProps) {
  return (
    <Form.Item className={classes.antd_form_item} {...props}>
      <Input.TextArea rows={4} className={classes.antd_form_input_textarea} />
    </Form.Item>
  );
}

function SelectInput({
  name,
  label,
  options,
  disabled = false,
}: SelectInputProps) {
  return (
    <Form.Item name={name} label={label} className={classes.antd_form_item}>
      <Select className={classes.select_wrap} disabled={disabled}>
        {options.map(({ name, value }, idx) => (
          <Select.Option key={name + idx} value={value}>
            {name}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}

function NumberInput({ name, label }: BaseInputProps) {
  return (
    <Form.Item
      className={classes.antd_form_item}
      name={name}
      label={label}
      rules={NumberRules}
    >
      <InputNumber className={classes.antd_form_input_number} />
    </Form.Item>
  );
}

function validateNumber(_: Rule, value: { number: number }) {
  const phoneNumberLength = value?.toString().length;
  const minlengthError = "Phone number length must be at least 9 characters!";
  const maxlengthError = "Phone number length must be less than 13 characters!";

  if (phoneNumberLength < 8) return Promise.reject(new Error(minlengthError));
  if (phoneNumberLength > 13) return Promise.reject(new Error(maxlengthError));

  return Promise.resolve();
}
export {
  Text,
  TextArea,
  SelectInput,
  NumberInput,
  PasswordInput,
  DisabledFormItem,
};
