import { Show, useDefaultProps } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';

interface WvParagraphGroupProps {
  small: boolean;
  heading: string;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvParagraphGroup(props: WvParagraphGroupProps) {
  useDefaultProps<WvParagraphGroupProps>({
    small: false,
    heading: '',
  });

  return (
    <div
      class={`wv_paragraph-group ${
        props.small ? 'wv_paragraph-group--small' : ''
      }`}
    >
      <Show when={props.heading}>
        <div
          class={`wv_paragraph-group__heading wv-kondolar wv-black wv-${
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
