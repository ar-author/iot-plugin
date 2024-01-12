import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import React from "react";

import { pluginId } from "@/index";
import DataItem from "./data-item";
import { IDataItem } from "@/type";
import DragItem from "./drag-item";

export default function ModalContent() {
  const iotList: IDataItem[] = [
    {
      id: "$017275B6A04750411683589B09C669576A",
      name: "moon",
      previewUrl:
        "https://tatooine.rokidcdn.com/test/media/share_model/8FF23907684D464BAFFCBE81314327D7/2023-12/449C115945F24C75B43D2F3938528E5F/0d3a240d-5853-4535-972f-8dbfc1c08187.png",
      src: "https://tatooine.rokidcdn.com/test/media/share_model/$017275B6A04750411683589B09C669576A/2023-12/6E546EBB22814807B50AD1EFF5A05C2C/4C31F535178A473D938B41AA49A145E6.glb",
    },
    {
      id: "$01DC1DD461A81B4D0393D157774DF62B5E",
      name: "sun",
      previewUrl:
        "https://tatooine.rokidcdn.com/test/media/share_model/8FF23907684D464BAFFCBE81314327D7/2023-12/9C2BD3FB63BA44549CA4A222CAA601DF/95a6f0b6-2690-4b1c-842c-83ad4fc32646.png",
      src: "https://tatooine.rokidcdn.com/test/media/share_model/$01DC1DD461A81B4D0393D157774DF62B5E/2023-12/60F06E886BD347E5819DC62593744814/29A0E6F90A2B40E3BE5A19B60F71402E.glb",
    },
    {
      id: "$0139064A8397EB4E3683349703DF3988E0",
      name: "Smiling Sun",
      previewUrl:
        "https://tatooine.rokidcdn.com/test/media/share_model/8FF23907684D464BAFFCBE81314327D7/2023-12/D9BBFD77163F4779BAA2EEF58D2E773F/65706e4d-03b5-4fe2-9d91-ce2b6db3d862.png",
      src: "https://tatooine.rokidcdn.com/test/media/share_model/$0139064A8397EB4E3683349703DF3988E0/2023-12/A3A96372700540F38EBE7BCAA6CEB5D6/B79536FE5A0C4FBF9E2EEA7E69D0179F.glb",
    },
    {
      id: "$01CA5B79D337CE4939821A539087004830",

      name: "moon",
      previewUrl:
        "https://tatooine.rokidcdn.com/test/media/share_model/8FF23907684D464BAFFCBE81314327D7/2023-12/DE8149F1D7B843D6B88BCF9A9F3C40BC/6151abba-ad79-41e1-843d-aaf5b80a33eb.png",
      src: "https://tatooine.rokidcdn.com/test/media/share_model/$01CA5B79D337CE4939821A539087004830/2023-12/BCF7D6D6B7F34E8FAE02B9E45A6C48E4/064537BBB8904317AE9D84194B8FF0AE.glb",
    },
    {
      id: "$01B31833FC248D4042BBCB14FE3CC1DCFA",

      name: "rainbow",
      previewUrl:
        "https://tatooine.rokidcdn.com/test/media/share_model/8FF23907684D464BAFFCBE81314327D7/2023-12/3729DC87B58B44F9AB7E25393BE7431E/58e7d7c8-9ad8-4adb-a91f-49dee8294809.png",
      src: "https://tatooine.rokidcdn.com/test/media/share_model/$01B31833FC248D4042BBCB14FE3CC1DCFA/2023-12/3A7713EA46F646B2936387DE574DA081/267D8B650747466AB6B81B5FCBE23091.glb",
    },
    {
      id: "$01382F4EF5840F44C5A87B2226F6E9C9E2",

      name: "white_ball",
      previewUrl:
        "https://tatooine.rokidcdn.com/test/media/share_model/8FF23907684D464BAFFCBE81314327D7/2023-12/0CF2A4D434EE457797B718FDDA4F966B/47ed5f1f-3d55-44f7-8eca-3975856767c7.png",
      src: "https://tatooine.rokidcdn.com/test/media/share_model/$01382F4EF5840F44C5A87B2226F6E9C9E2/2023-12/8806A65C1BF2452293C6BF1B9E130D80/C812FEC6A1F443AC88F907290F8A738C.glb",
    },
    {
      id: "$01128DAFEDFE00496A81FD6C54C8375112",

      name: "blue_minus_sign",
      previewUrl:
        "https://tatooine.rokidcdn.com/test/media/share_model/8FF23907684D464BAFFCBE81314327D7/2023-12/34916F33640D4955A32CFEAC44D7DE3D/4b021a18-a6fb-498f-a998-e5bae21efd03.png",
      src: "https://tatooine.rokidcdn.com/test/media/share_model/$01128DAFEDFE00496A81FD6C54C8375112/2023-12/5D108DCD7F66434D8134EFB5E8BF9ECA/1071CD0419DD453CBFC102742321424A.glb",
    },
    {
      id: "$01DA8259F34259441284E35BBE47F52F9E",

      name: "blue_plus_sign",
      previewUrl:
        "https://tatooine.rokidcdn.com/test/media/share_model/8FF23907684D464BAFFCBE81314327D7/2023-12/6A9D62F26DFC4A7C877E87896293FD08/dfeb1846-42d8-44ce-b657-c8cca33bbfe3.png",
      src: "https://tatooine.rokidcdn.com/test/media/share_model/$01DA8259F34259441284E35BBE47F52F9E/2023-12/5AC751CA65FA49288CD22376D6F43B9C/02EB2B4FA157433696628846355AC3CC.glb",
    },
    {
      id: "$01DACD1F3173FB4B97B05306115F5EB1AA",

      name: "灯泡2",
      previewUrl:
        "https://tatooine.rokidcdn.com/test/media/share_model/1023791374364178A2D3EF195B49F79B/2023-12/0ADE1B62F2DE4D32952D407D7070D3D2/705b6938-084f-42a4-a135-73cbdc20c861.png",
      src: "https://tatooine.rokidcdn.com/test/media/share_model/$01DACD1F3173FB4B97B05306115F5EB1AA/2023-12/92B387BE966045B2B594E87AB759E621/CEAAE91D08014A8E92BE290C2DEFDCAF.glb",
    },
  ];
  return (
    <ConfigProvider locale={zhCN}>
      <div className="pt-[40px] bg-white h-full w-full">
        <div className="w-full h-[400px] flex flex-wrap overflow-y-scroll">
          {iotList.map((item, index) => (
            <div
              id={item.id}
              className={`mb-[20px] ${(index + 1) % 2 ? "mr-[60px]" : ""}`}
            >
              <DragItem<IDataItem> data={item}>
                <DataItem {...item} />
              </DragItem>
            </div>
          ))}
        </div>
      </div>
    </ConfigProvider>
  );
}
