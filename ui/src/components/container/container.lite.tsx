import { Show, useDefaultProps } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';

interface WvContainerProps {
  heading: string;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvContainer(props: WvContainerProps) {
  useDefaultProps<WvContainerProps>({
    heading: undefined,
  });

  return (
    <div class="wv_container">
      <Show when={props.heading}>
        <h1 class="wv-kondolar wv-black wv-h4">{props.heading}</h1>
      </Show>

      {props.children}
    </div>
  );
}
