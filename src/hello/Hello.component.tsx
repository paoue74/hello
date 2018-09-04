import * as React from 'react';

// tslint:disable-next-line:interface-name
export interface HelloProps {
  name: string;
  message: string;
  changeMsg: (event: React.MouseEvent<HTMLElement>) => void;
}

export class Hello extends React.Component<HelloProps, {}> {
  constructor(props: HelloProps) {
    super(props);

  }

  public render() {
    return (
      <div>
        <div>
          <p>Hello { this.props.name }, </p>
          <p>{ this.props.message ? this.props.message : "This is a default msg" }</p>
        </div>
        <div>
          <button onClick={ this.props.changeMsg }>
            Click me
          </button>
        </div>
      </div>
    );
  }
}


export default Hello;
