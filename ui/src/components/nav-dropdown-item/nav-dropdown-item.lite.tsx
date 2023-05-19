import { useDefaultProps } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';

interface WvNavDropdownItemProps {
  dark?: boolean;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvNavDropdownItem(props: WvNavDropdownItemProps) {
  useDefaultProps<WvNavDropdownItemProps>({
    dark: false,
  });

  return (
    <button
      type="button"
      class={`wv_nav-dropdown-item wv-anuphan wv-b6 ${
        props.dark
          ? 'wv_nav-dropdown-item--black'
          : 'wv_nav-dropdown-item--white'
      }`}
    >
      {props.children}
    </button>
  );
}
