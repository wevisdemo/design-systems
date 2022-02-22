import '@builder.io/mitosis/dist/src/jsx-types';

interface WvNavDropdownItemProps {
  dark?: boolean;
  children?: JSX.Element;
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
