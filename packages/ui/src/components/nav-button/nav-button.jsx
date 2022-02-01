export default function WvNavButton(props) {
  return (
    <button
      class={`wv_nav-button wv_font_anuphan wv_b7 ${
        props.dark !== undefined
          ? 'wv_nav-button--white'
          : 'wv_nav-button--black'
      } ${props.active !== undefined ? 'wv_nav-button--active' : ''}`}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </button>
  );
}
