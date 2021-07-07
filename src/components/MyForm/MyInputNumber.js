import React from "react";
import { InputNumber } from "antd";

export default function MyInputNumber({ addonAfter, style, ...props }) {
  return (
    <>
      <InputNumber
        type="number"
        {...props}
        style={{ width: "55%", ...style }}
      />
      <div
        className="ant-input-group-addon"
        style={{
          paddingTop: "2px",
          verticalAlign: "middle",
          display: "inline-table",
          lineHeight: "24px",
          height: "32px",
          position: "relative",
          top: "-1.5px",
        }}
      >
        {addonAfter}
      </div>
    </>
  );
}
