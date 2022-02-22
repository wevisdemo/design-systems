import '@builder.io/mitosis/dist/src/jsx-types';

interface WvButtonProps {
  color?: 'blue' | 'black' | 'white';
  small?: boolean;
  onClick?: () => void;
  children?: JSX.Element;
}

export default function WvButton(props: WvButtonProps) {
  return (
    <button
      class={`wv_button wv-font-anuphan wv_button--${props.color || 'blue'} ${
        props.small ? 'wv-b5 wv_button--small' : 'wv-b4'
      }`}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </button>
  );
}
