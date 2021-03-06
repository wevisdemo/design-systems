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
        props.small ? 'wv_paragraph-group--small' : ''
      }`}
    >
      <Show when={props.heading}>
        <div
          class={`wv_paragraph-group__heading wv-font-kondolar wv-font-black wv-${
            props.small ? 'b4' : 'h5'
          }`}
        >
          {props.heading}
        </div>
      </Show>

      {props.children}
    </div>
  );
}
