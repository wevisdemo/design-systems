export default function WvParagraphGroup(props) {
  return (
    <div
      class={`wv_paragraph-group ${
        props.small !== undefined ? 'wv_paragraph-group--small' : ''
      }`}
    >
      <Show when={props.heading}>
        <strong
          class={`wv_paragraph-group__heading wv_font_kondora wv_${
            props.small !== undefined ? 'b4' : 'h5'
          }`}
        >
          {props.heading}
        </strong>
      </Show>

      {props.children}
    </div>
  );
}
