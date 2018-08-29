import * as React from 'react';
// import { connect } from 'react-redux'
import Hello from './Hello.component';

// tslint:disable-next-line:interface-name
export interface HelloState {
  name: string;
  message: string;
}

class HelloContainer extends React.Component<{}, HelloState> {

  // constructor(props: Readonly<{}>) {
  //   super(props);

  //   // this.state = {
  //   //   name: "Fabien",
  //   //   // tslint:disable-next-line:object-literal-sort-keys
  //   //   message: "React TS simple component",
  //   // };
  // }

  public render() {
    return (
      <Hello name="Fabien" message="React TS container" />
    );
  }
}

// const mapState2Props = state => {
//   return {
//   };
// }

// export default connect(/*mapState2Props*/)(HelloContainer);
export default HelloContainer