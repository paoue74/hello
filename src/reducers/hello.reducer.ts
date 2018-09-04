import * as _ from 'lodash';
import { AnyAction } from 'redux';

export interface IRootState {
  name: string,
  message: string,
}

const initialState: IRootState = {
  name: '',
  // tslint:disable-next-line:object-literal-sort-keys
  message: '',
};

export const getName = (state: IRootState): string =>  state.name;
export const getMessage = (state: IRootState): string => state.message;

const helloStore = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'INIT_HELLO_NAME':
      return {
        ...state,
        name: 'Fabien',
      };
    case 'INIT_HELLO_MSG':
      return {
        ...state,
        message: 'This is the initialization msg',
      };
    case 'UPDATE_HELLO_MSG':
      const newSate = _.assign(state, { message: action.message });
      return { ...newSate } ;
    default: return state;
  }

}

export default helloStore;