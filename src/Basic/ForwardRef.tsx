import React, { forwardRef } from 'react';

type Props = {
  children?: React.ReactNode;
  type: 'submit' | 'button';
};

export type Ref = HTMLButtonElement;

const ForwardRef = forwardRef<Ref, Props>((props, ref) => {
  return (
    <button ref={ref} type={props.type}>
      {props.children}
    </button>
  );
});

export default ForwardRef;
