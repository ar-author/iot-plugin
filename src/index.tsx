import "./main.css";
import PluginSystem from "ar-author-plugin-system";
import { Scene } from "ar-author-platform-types";
import { IotComponent } from "./factory/IotComponent";
import renderModal from "./ui/renderModal";
import { addIotComponent } from "./util";
const pluginSystem = new PluginSystem();

export let scene: Scene;
export const pluginId = pluginSystem.id;

pluginSystem.registerHooks(
  {
    didLoad(pluginId, pluginList, s) {
      scene = s as Scene;
      console.log("didLoad-iot", pluginId, pluginList);
      scene.registryComponent("iot", IotComponent);
    },
    didAllLoad(pluginList) {
      console.log("didAllLoad-iot", pluginList);
    },

    onPluginDrop(id) {
      if (pluginId === id) {
        scene?.recordHistory?.();
        renderModal();
      }
    },
    onDataDrop(id, payload) {
      if (pluginId === id) {
        scene.recordHistory?.();
        console.log("data drop!-iot", payload);
        addIotComponent(scene, payload);
      }
    },
  },
  pluginId
);
