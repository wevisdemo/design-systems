export default function WvContainer(props) {
  return (
    <div class="wv_container">
      <Show when={props.heading}>
        <h1 class="wv_font_kondora wv_h4">{props.heading}</h1>
      </Show>

      {props.children}
    </div>
  );
}
