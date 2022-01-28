export default function WvButtonGroup(props) {
  return (
    <div
      class={`wv_button-group ${
        props.center !== undefined ? 'wv_button-group--center' : ''
      }`}
    >
      {props.children}
    </div>
  );
}
