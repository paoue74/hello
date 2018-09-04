import { BaseAction } from "redux-actions";

export const initHelloName = (): BaseAction => ({
  type: 'INIT_HELLO_NAME',
});

export const initHelloMsg = (): BaseAction => ({
  type: 'INIT_HELLO_MSG',
});

export interface IUpdateHelloMsgAction extends BaseAction {
  message: string
}

export const updateHelloMsg = (message: string): IUpdateHelloMsgAction => ({
  message,
  type: 'UPDATE_HELLO_MSG',
})