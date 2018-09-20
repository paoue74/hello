import * as React from 'react';

// tslint:disable-next-line:interface-name
export interface HelloRecomposeProps {
  name: string;
  message: string;
  onChangeMsg: (event: React.MouseEvent<HTMLElement>) => void;
}

export const HelloRecompose = (props: HelloRecomposeProps): JSX.Element => {
  const {
    name,
    message,
    onChangeMsg
  } = props
  return (
    <div>
      <div>
        <p>Hello from Recompose { name }, </p>
        <p>{ message ? message : "This is a Recompose default msg" }</p>
      </div>
      <div>
        <button onClick={ onChangeMsg }>
          Click me
        </button>
      </div>
    </div>
  );
};

export default HelloRecompose;
