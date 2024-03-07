import { useDefaultProps } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';

interface WvNavButtonProps {
  dark: boolean;
  active: boolean;
  onClick?: () => void;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvNavButton(props: WvNavButtonProps) {
  useDefaultProps<WvNavButtonProps>({
    dark: false,
    active: false,
    onClick: undefined,
  });

  return (
    <button
      type="button"
      class={`wv_nav-button wv-ibmplex wv-b7 ${
        props.dark ? 'wv_nav-button--white' : 'wv_nav-button--black'
      } ${props.active ? 'wv_nav-button--active' : ''}`}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </button>
  );
}
