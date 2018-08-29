import * as React from 'react';

// tslint:disable-next-line:interface-name
export interface HelloProps {
  name: string;
  message: string;
}

class Hello extends React.Component<HelloProps, {}> {
  constructor(props: HelloProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <p>Hello {this.props.name}, </p>
        <p>{this.props.message}</p>
      </div>
    );
  }
}


export default Hello;
