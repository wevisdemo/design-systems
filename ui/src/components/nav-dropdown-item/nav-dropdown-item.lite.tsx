import { JSX } from '@builder.io/mitosis/jsx-runtime';

interface WvNavDropdownItemProps {
  dark?: boolean;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvNavDropdownItem(props: WvNavDropdownItemProps) {
  return (
    <button
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
