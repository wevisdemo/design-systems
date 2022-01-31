export default function WvNavDropdownItem(props) {
  return (
    <button
      class={`wv_nav-dropdown-item ${
        props.dark !== undefined
          ? 'wv_nav-dropdown-item--black'
          : 'wv_nav-dropdown-item--white'
      }`}
    >
      {props.children}
    </button>
  );
}
