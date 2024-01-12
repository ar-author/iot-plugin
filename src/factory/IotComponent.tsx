import ReactDOM from "react-dom/client";
import { scene } from "@/index";
import { Entity } from "ar-author-platform-types";

import { IEventData, IIotDataType } from "@/type";
import { v4 as uuidv4 } from "uuid";
import Property from "@/ui/component/property";
import getScriptTemplate from "./getScriptTemplate";

export class IotComponent {
  type = "iot";
  properties?: IEventData;
  id?: string;
  _root?: HTMLElement;
  _entity?: Entity;
  _reactRoot?: ReactDOM.Root | null;
  constructor(params?: IIotDataType) {
    this.id = params?.id || uuidv4();
    this.properties = params?.properties;
  }

  _init() {
    console.log("iot component init");
  }
  setData(eventData: IEventData) {
    this.properties = eventData;
  }

  _exportJSON() {
    console.log("export iot-llm");
    const assetId = uuidv4();

    scene.assets.loadAsset("script", {
      src: getScriptTemplate(this.properties!, this._entity!.id!),
      id: assetId,
    });

    const jsonData = [
      {
        id: this.id,
        type: "iot",
        properties: this.properties,
      },
      {
        id: uuidv4(),
        type: "script",
        asset: assetId,
      },
    ];
    console.log("export iot-llm", jsonData);
    return jsonData;
  }

  _renderReact() {
    if (!this._root) return;
    if (this._reactRoot) {
      this._reactRoot.unmount();
      this._reactRoot = null;
    }
    this._reactRoot = ReactDOM.createRoot(this._root!);
    this._reactRoot.render(
      <Property
        initialValue={this.properties}
        onChange={(eventData) => {
          this.setData(eventData);
        }}
      />
    );
  }

  renderProps(entity: Entity) {
    if (!this._root) this._root = document.createElement("div");
    this._entity = entity;
    this._renderReact();
    return this._root;
  }

  async clone(): Promise<IotComponent> {
    const component = await scene?.createComponent("iot", {
      eventData: this.properties,
    });
    return component as unknown as IotComponent;
  }
}
