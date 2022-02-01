export default function WvButton(props) {
  return (
    <button
      class={`wv_button wv_font_anuphan wv_button--${props.color || 'blue'} ${
        props.small !== undefined ? 'wv_b5 wv_button--small' : 'wv_b4'
      }`}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </button>
  );
}
