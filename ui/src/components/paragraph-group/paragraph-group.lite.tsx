import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { Show, useDefaultProps } from '@builder.io/mitosis';

interface WvParagraphGroupProps {
  small?: boolean;
  heading?: string;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvParagraphGroup(props: WvParagraphGroupProps) {
  useDefaultProps<WvParagraphGroupProps>({
    small: false,
    heading: undefined,
  });

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
