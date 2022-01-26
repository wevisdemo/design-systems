export default function WvNavButton(props) {
  return (
    <button
      class={`wv_nav-button wv_font_anuphan wv_b7 ${
        props.withDarkTheme !== undefined
          ? 'wv_nav-button--white'
          : 'wv_nav-button--black'
      } ${props.isActive !== undefined ? 'wv_nav-button--active' : ''}`}
    >
      {props.children}
    </button>
  );
}
