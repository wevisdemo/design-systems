import '@builder.io/mitosis/dist/src/jsx-types';
import { Show } from '@builder.io/mitosis';

interface WvParagraphGroupProps {
  small?: boolean;
  heading?: string;
  children?: JSX.Element;
}

export default function WvParagraphGroup(props: WvParagraphGroupProps) {
  return (
    <div
      class={`wv_paragraph-group ${
        props.small !== undefined ? 'wv_paragraph-group--small' : ''
      }`}
    >
      <Show when={props.heading}>
        <strong
          class={`wv_paragraph-group__heading wv-font-kondolar wv-${
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
