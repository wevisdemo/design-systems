export default function WvNavDropdownItem(props) {
  return (
    <button
      class={`wv_nav-dropdown-item wv-anuphan wv-b6 ${
        props.dark !== undefined
          ? 'wv_nav-dropdown-item--black'
          : 'wv_nav-dropdown-item--white'
      }`}
    >
      {props.children}
    </button>
  );
}
