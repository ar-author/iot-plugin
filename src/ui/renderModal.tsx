import { Modal } from "antd";
import React from "react";

import ModalContent from "./component/modal";

export default function renderModal() {
  Modal.destroyAll();
  Modal.confirm({
    title: "选择智能设备",
    mask: false,
    wrapClassName: "pointer-events-none",
    icon: null,
    content: <ModalContent />,
    cancelButtonProps: { style: { display: "none" } },
    okText: "关闭",
    onOk() {
      console.log("OK");
    },
  });
}
