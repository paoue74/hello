import * as React from 'react';

// tslint:disable-next-line:interface-name
export interface HelloSFCProps {
  name: string;
  message: string;
  changeMsg: (event: React.MouseEvent<HTMLElement>) => void;
}

export const HelloSFC: React.SFC<HelloSFCProps> = (props: HelloSFCProps): JSX.Element => {
  return (
    <div>
      <div>
        <p>Hello { props.name }, </p>
        <p>{ props.message ? props.message : "This is a SFC default msg" }</p>
      </div>
      <div>
        <button onClick={ props.changeMsg }>
          Click me
        </button>
      </div>
    </div>
  );
};

export default HelloSFC;
