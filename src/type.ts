export type IEventType = "click";
export type IActionType = "fetch";
export type IPropsType = "url" | "json" | "method";
export type IMethodType = "GET" | "POST";
export type IActionData = {
  actionName: IActionType;
  props: { [key: string]: string | number | boolean };
};
export type IProps = {
  url: string;
  json: string;
  method: IMethodType;
};
export type IEventData = {
  eventName: IEventType;
  actionName: IEventType;
  defaultState?: number;
  type: "switch" | "other";
  props: IProps[];
};
export type IIotDataType = {
  properties: IEventData;
  id?: string;
};

export type IDataItem = {
  id: string;
  name: string;
  src: string;
  previewUrl: string;
};
