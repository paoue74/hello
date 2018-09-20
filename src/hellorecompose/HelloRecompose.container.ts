import * as _ from 'lodash';
import { connect } from 'react-redux';
import { compose, lifecycle, ReactLifeCycleFunctions, withHandlers } from 'recompose';
import { Dispatch } from 'redux';

import { data } from '../data/data';
import { initHelloMsg, initHelloName, updateHelloMsg } from '../hello/actions';
import { getMessage, getName, IRootState } from '../reducers/hello.reducer';
import HelloRecompose, { HelloRecomposeProps } from './HelloRecompose.component';

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

export type ContainerProps = StateProps & DispatchProps;


const mapState2Props = (state: IRootState): StateProps => ({
  message: getMessage(state),
  name: getName(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeMsg: (msg: string) => dispatch(updateHelloMsg(msg)),
  initHelloMsg: () => dispatch(initHelloMsg()),
  initHelloName: () => dispatch(initHelloName()),
});

const withConnection = connect(mapState2Props, mapDispatchToProps);

export const handlers = {
  onChangeMsg: ({ changeMsg }: ContainerProps) => () => {
    const newMsg = data[_.random(0, 2)];
    changeMsg(newMsg);
  },
};

export const containerLifecycle: ReactLifeCycleFunctions<ContainerProps, {}> = {
  componentDidMount() {
    if (_.isUndefined(this.props.name) || _.isEmpty(this.props.name)) {
      this.props.initHelloName();
    }
    if (_.isUndefined(this.props.message) || _.isEmpty(this.props.message)) {
      this.props.initHelloMsg();
    }
  },
};

const enhance = compose<HelloRecomposeProps, {}>(
  withConnection,
  lifecycle(containerLifecycle),
  withHandlers(handlers),
);

const EnhanceComponent = enhance(HelloRecompose);

// export default connect(mapState2Props, mapDispatchToProps)(EnhanceComponent);

export default EnhanceComponent;