import { Select, Form, Input, InputNumber } from "antd";
import classes from "./basic-input.module.css";

interface BaseInputProps {
  name: string;
  label: string;
  rules: [];
}
interface SelectInputProps extends BaseInputProps {
  disabled: boolean;
  options: { name: string; value: string }[];
}
function Text(props: BaseInputProps) {
  return (
    <Form.Item className={classes.antd_form_item} {...props}>
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
    <Form.Item className={classes.antd_form_item} {...props}>
      <Input.Password className={classes.antd_form_input_text} />
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
  rules = [],
}: SelectInputProps) {
  return (
    <Form.Item
      name={name}
      label={label}
      className={classes.antd_form_item}
      rules={rules}
    >
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

function NumberInput(props: BaseInputProps) {
  return (
    <Form.Item
      className={classes.antd_form_item}
      {...props}
      label={props.label}
    >
      <InputNumber className={classes.antd_form_input_number} />
    </Form.Item>
  );
}
export {
  Text,
  TextArea,
  SelectInput,
  NumberInput,
  PasswordInput,
  DisabledFormItem,
};
