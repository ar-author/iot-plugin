import { IEventData } from "@/type";
import { v4 as uuidv4 } from "uuid";
// const eventMap: { [key in IEventType]: string } = {
//   click: 'EventType.CLICK',
// };

export default function getScriptTemplate(
  eventDataRaw: IEventData,
  entityId: string
) {
  if (!eventDataRaw) return "";
  const parsedEventData = {
    ...eventDataRaw,
    props: eventDataRaw.props.map((item) => ({
      ...item,
      json: JSON.parse(item.json),
    })),
  };
  const eventData = JSON.stringify(parsedEventData).replace(/"/g, "'");
  const classId = uuidv4().replace(/-/g, "");
  const str = `
  data:text/javascript;charset=utf-8,
  class TransitionScript_${classId} extends SceneBehavior {
    _eventData = ${eventData};
    _state = ${parsedEventData.defaultState ?? 0};
    _callback = () => {
  
     const fetchInfo = this._eventData.props[this._state];
      if (fetchInfo) {
      XHTTP[fetchInfo.method](fetchInfo.url, fetchInfo.json, response => {
    console.log('xhttpres ' + response);
    if(this._eventData.type==='switch'){
        this._state = +!this._state;
    }
}, msg => {
    console.log('xhttperr: ' + msg);
});
      }
    };
    onStart() {
      console.log('onStart from TransitionScript ' + this.element.id);
      this.element.event.add(EventType.CLICK, () => {
        this._callback();
      });
    }
    onUpdate() {
      console.log('onUpdate from TransitionScript ' + this.element.id);
    }
    onDestroy() {
      console.log('onDestroy');
      this.element.event.remove(EventType.CLICK, this._callback);
    }
  }
  ElementManager.instance
    .getElementById('${entityId}')
    .addComponent(
      new TransitionScript_${classId}(
        '${entityId}'
      )
    );
  `;
  return str.replace(/\n/g, "");
}
