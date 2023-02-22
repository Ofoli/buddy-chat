import { Modal } from "antd";

interface Props {
  open: boolean;
  onCancel: () => void;
  children: ChildrenType;
}
export default function CustomModal({ open, onCancel, children }: Props) {
  return (
    <Modal title="Basic Modal" open={open} onCancel={onCancel} footer={null}>
      {children}
    </Modal>
  );
}
