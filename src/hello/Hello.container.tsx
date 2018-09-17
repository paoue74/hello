import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { data } from '../data/data';
import { getMessage, getName, IRootState } from '../reducers/hello.reducer';
import { initHelloMsg, initHelloName, updateHelloMsg } from './actions';
import Hello from './Hello.component';

// tslint:disable-next-line:interface-name
export interface StateProps {
  name: string;
  message: string;
}

// tslint:disable-next-line:interface-name
export interface DispatchProps {
  initHelloName: () => void;
  initHelloMsg: () => void;
  updateHelloMsg: (newMsg: string) => void;
}

export type ContainerProps = StateProps & DispatchProps;

export class HelloContainer extends React.Component<ContainerProps, StateProps> {

  constructor(props: Readonly<ContainerProps>) {
    super(props);
    
    this.handleChangeMsg = this.handleChangeMsg.bind(this);
  }

  public componentDidMount() {
    if(_.isUndefined(this.props.name) || _.isEmpty(this.props.name)) {
      this.props.initHelloName();
    }
    if(_.isUndefined(this.props.message) || _.isEmpty(this.props.message)) {
      this.props.initHelloMsg();
    }
  }

  public render() {
    return (
      <Hello name={this.props.name} message={this.props.message} changeMsg={this.handleChangeMsg}/>
    );
  }

  public handleChangeMsg() {
    const newMsg = data[_.random(0, 2)];
    this.props.updateHelloMsg(newMsg);
  }
}

const mapState2Props = (state: IRootState): StateProps => ({
  message: getMessage(state),
  name: getName(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  initHelloMsg: () => dispatch(initHelloMsg()),
  initHelloName: () => dispatch(initHelloName()),
  updateHelloMsg: (msg: string) => dispatch(updateHelloMsg(msg)),
});

export default connect(mapState2Props, mapDispatchToProps)(HelloContainer);