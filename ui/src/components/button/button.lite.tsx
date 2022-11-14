import { useDefaultProps } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';

interface WvButtonProps {
  color?: 'blue' | 'black' | 'white';
  small?: boolean;
  onClick?: () => void;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvButton(props: WvButtonProps) {
  useDefaultProps<WvButtonProps>({
    color: 'blue',
    small: false,
    onClick: undefined,
  });

  return (
    <button
      class={`wv_button wv-font-anuphan wv_button--${props.color} ${
        props.small ? 'wv-b5 wv_button--small' : 'wv-b4'
      }`}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </button>
  );
}
