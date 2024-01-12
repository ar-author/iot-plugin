import { IEventData, IProps, IPropsType } from "@/type";
import { Card, ConfigProvider, Form, Input, Select, Space } from "antd";
import zhCN from "antd/locale/zh_CN";
import React from "react";

interface IPropertyProps {
  initialValue?: IEventData;
  onChange: (eventData: IEventData) => void;
}

export default function Property({ initialValue, onChange }: IPropertyProps) {
  const renderPropsItem = (index: number) => {
    return (
      <>
        <Form.Item label="url" name={["props", index, "url"]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="json"
          name={["props", index, "json"]}
          rules={[
            {
              required: true,
              message: "必填",
            },
            () => ({
              validator(_, value) {
                try {
                  JSON.parse(value);
                  return Promise.resolve();
                } catch (error) {
                  return Promise.reject(new Error("json格式错误"));
                }
              },
            }),
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="method" name={["props", index, "method"]}>
          <Select
            options={[
              {
                label: "GET",
                value: "get",
              },
              {
                label: "POST",
                value: "post",
              },
            ]}
          />
        </Form.Item>
      </>
    );
  };

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#7566F5",
        },
        components: {
          Form: {
            itemMarginBottom: 8,
            labelColor: "#5F606C",
            labelFontSize: 12,
            // labelHeight: 22,
          },
          Select: {
            optionFontSize: 14,
            // optionHeight:24,
            // optionLineHeight:22,
            optionSelectedBg: "#F2F2F5",
            optionActiveBg: "#E8ECFF",
            selectorBg: "#F3F4FB",
          },
          Switch: {
            fontSize: 12,
          },
        },
      }}
    >
      <div className="h-[400px] overflow-y-auto">
        <Form
          initialValues={{
            eventName: "click",
            actionName: "fetch",
            type: "other",
            defaultState: 0,
            method: "get",
            ...initialValue,
          }}
          autoComplete="off"
          style={{ marginTop: "20px" }}
          onValuesChange={(changedValues, allValues) => {
            const props = allValues.props;
            if (props) {
              allValues.props = props.filter((item: IProps) => {
                return (
                  item &&
                  Object.keys(item).some((key) => item[key as keyof IProps])
                );
              });
            }
            onChange(allValues);
          }}
        >
          <Form.Item name="eventName" label="选择事件">
            <Select
              options={[
                {
                  label: "点击",
                  value: "click",
                },
              ]}
            />
          </Form.Item>
          <Form.Item name="actionName" label="选择动作">
            <Select
              options={[
                {
                  label: "发送请求",
                  value: "fetch",
                },
              ]}
            />
          </Form.Item>
          <Form.Item name="type" label="类型">
            <Select
              options={[
                {
                  label: "开关",
                  value: "switch",
                },
                {
                  label: "其他",
                  value: "other",
                },
              ]}
            />
          </Form.Item>
          <Form.Item dependencies={["type"]}>
            {({ getFieldValue }) => {
              const type = getFieldValue("type");

              if (type === "switch") {
                return (
                  <>
                    <Form.Item
                      name="defaultState"
                      label="默认状态"
                      initialValue={0}
                    >
                      <Select
                        options={[
                          {
                            label: "开",
                            value: 1,
                          },
                          {
                            label: "关",
                            value: 0,
                          },
                        ]}
                      />
                    </Form.Item>
                    <Space direction="vertical" size={8}>
                      <Card title="开">{renderPropsItem(1)}</Card>
                      <Card title="关">{renderPropsItem(0)}</Card>
                    </Space>
                  </>
                );
              }
              return <>{renderPropsItem(0)}</>;
            }}
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  );
}
