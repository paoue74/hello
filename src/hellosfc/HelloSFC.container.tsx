import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { data } from '../data/data';
import { initHelloMsg, initHelloName, updateHelloMsg } from '../hello/actions';
import { getMessage, getName, IRootState } from '../reducers/hello.reducer';
import HelloSFC from './HelloSFC.component';

// tslint:disable-next-line:interface-name
interface StateProps {
  message: string,
  name: string,
}

// tslint:disable-next-line:interface-name
export interface DispatchProps {
  initHelloName: () => void;
  initHelloMsg: () => void;
  changeMsg: (newMsg: string) => void;
}

type ContainerProps = StateProps & DispatchProps;

export const handleChangeMsg = () => ({ changeMsg }: DispatchProps) => {
  // tslint:disable-next-line:no-console
  console.log('test');
  const newMsg = data[_.random(0, 2)];
  changeMsg(newMsg);
};

export const HelloSFCContainer: React.SFC<ContainerProps> = ({ name, message }: ContainerProps) => {
  return (
    <HelloSFC name={ name } message={ message } changeMsg={ handleChangeMsg } />
  );
};

const mapState2Props = (state: IRootState): StateProps => ({
  message: getMessage(state),
  name: getName(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeMsg: (msg: string) => dispatch(updateHelloMsg(msg)),
  initHelloMsg: () => dispatch(initHelloMsg()),
  initHelloName: () => dispatch(initHelloName()),
});

export default connect(mapState2Props, mapDispatchToProps)(HelloSFCContainer);