import { useDefaultProps } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';

interface WvButtonGroupProps {
  center?: boolean;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvButtonGroup(props: WvButtonGroupProps) {
  useDefaultProps<WvButtonGroupProps>({
    center: false,
  });

  return (
    <div
      class={`wv_button-group ${props.center ? 'wv_button-group--center' : ''}`}
    >
      {props.children}
    </div>
  );
}
