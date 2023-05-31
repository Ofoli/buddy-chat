import { Modal } from "antd";

interface Props {
  title: string;
  open: boolean;
  onCancel: () => void;
  children: ChildrenType;
}
export default function CustomModal({
  title,
  open,
  onCancel,
  children,
}: Props) {
  return (
    <Modal title={title} open={open} onCancel={onCancel} footer={null}>
      {children}
    </Modal>
  );
}
