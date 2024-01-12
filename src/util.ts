import { Scene } from "ar-author-platform-types";
import { IDataItem } from "./type";

export async function addIotComponent(scene: Scene, iotData: IDataItem) {
  const gltfAsset = await scene?.assets.loadAsset("gltf", {
    src: iotData.src,
  });
  const gltfComponent = await scene?.createComponent("gltf", {
    asset: gltfAsset.id,
  });
  const iotEntity = await scene?.createEntity({ name: iotData.name });
  iotEntity.addComponent(gltfComponent);
  const iotComponent = await scene?.createComponent("iot", {});
  iotEntity.addComponent(iotComponent);
  scene.addEntity(iotEntity);
  scene.focus(iotEntity, { center: true });
}
